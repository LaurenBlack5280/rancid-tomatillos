import React, { Component } from "react";
import { fetchMovieData } from "../../apiCalls";
import "./MovieDetails.css";
import rancidMeter from "../../images/rancidMeter.png";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      error: "",
      backdrop: {},
      isLoading: true,
    };
  }

  formatDollarFigure = (property) => {
    const amount = parseInt(property);
    const numFor = Intl.NumberFormat("en-US");
    const formattedAmount = numFor.format(amount);

    if (property === 0) {
      return "No public record";
    } else {
      return `$${formattedAmount}`;
    }
  };

  checkForGenre = () => {
    if (this.state.movie.genres.length) {
      return this.state.movie.genres.join(", ");
    } else {
      return "No genre available";
    }
  };

  componentDidMount = () => {
    fetchMovieData(`/${this.state.id}`)
      .then((data) => {
        console.log(this.state.id);
        // also setState to backdrop, by invoking styleBackdrop() here
        this.setState({ movie: data.movie, isLoading: false });
      })
      .catch((err) => {
        this.setState({ error: err.status });
      });
  };

  render = () => {
    if (this.state.isLoading) {
      return (
        <div>
          <h3>Loading</h3>
        </div>
      );
    }
    return (
      // <section className="movie-details-page" style={this.state.backdrop}>
      <section
        className="movie-details-page"
        style={{
          backgroundImage: `url(${this.state.movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="details-background">
          <div className="movie-details-container">
            <div className="movie-poster-container">
              <div className="movie-poster-wrapper">
                <div className="movie-poster">
                  <img
                    src={this.state.movie.poster_path}
                    alt={`movie poster for ${this.state.movie.title}`}
                  />
                </div>
              </div>
            </div>
            <div className="movie-descriptions-container">
              <div className="movie-title-container">
                <h2 className="movie-details-movie-title">{this.state.movie.title}</h2>
                <p className="movie-title-info">
                  {this.state.movie.release_date}, {this.state.movie.genres.join("/")},{" "}
                  {this.state.movie.runtime} min
                </p>
                <div className="rancid-meter">
                  <div className="rancid-meter-container">
                    <img src={rancidMeter}></img>
                  </div>
                  <p className="rancid-meter-rating">
                    <span className="rr-1 rr-3">Rancid Rating</span>
                    <span className="rr-2 rr-3">{this.state.movie.average_rating}/10</span>
                  </p>
                </div>
              </div>
              <div className="more-info">
                <h3>MORE INFO</h3>
              </div>
              <div className="more-info-details">
                <p>
                  <span className="overview">{this.state.movie.overview}</span>
                  <span className="details-release-date">
                    Release Date: {this.state.movie.release_date}
                  </span>
                  <span>Average Rating: {this.state.movie.average_rating}/10</span>
                  <span>Genres: {this.checkForGenre()}</span>
                  <span>Movie Budget: {this.formatDollarFigure(this.state.movie.budget)}</span>
                  <span>Revenue: {this.formatDollarFigure(this.state.movie.revenue)}</span>
                  <span>Runtime: {this.state.movie.runtime} min</span>
                  <span>Tagline: {this.state.movie.tagline}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default MovieDetails;
