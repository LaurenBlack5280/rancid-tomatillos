import React, { Component } from "react";
import { fetchMovieData } from "../../apiCalls";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      error: "",
      backdrop: {},
    };
  }

  styleBackdrop = () => {

  }

  componentDidMount = () => {
    fetchMovieData(`/${this.state.id}`)
      .then((data) => {
        // also setState to backdrop, by invoking styleBackdrop() here
        this.setState({ movie: data.movie });
      })
      .catch((err) => {
        this.setState({ error: err.status });
      });
  };

  render() {
    return (
      <section className="movie-details-page" style={this.state.backdrop}>
        <div className="details-background">
          <div className="movie-details-container">
            <div className="movie-poster-container">
              <div className="movie-poster">
                <img src={this.state.movie.poster_path} alt="movie poster" />
              </div>
            </div>
            <div className="movie-descriptions-container">
              <h2 className="movie-details-movie-title">{this.state.movie.title}</h2>
              <img src={this.state.movie.backdrop_path} alt="movie backdrop" />
              <p>
                <span>{this.state.movie.release_date} </span>
                <span>{this.state.movie.overview}</span>
                <span>{this.state.movie.average_rating}</span>
                <span>{this.state.movie.genres}</span>
                <span>{this.state.movie.budget}</span>
                <span>{this.state.movie.revenue}</span>
                <span>{this.state.movie.runtime}</span>
                <span>{this.state.movie.tagline}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;
