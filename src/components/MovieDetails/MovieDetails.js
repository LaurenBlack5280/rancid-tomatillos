import React, { Component } from "react";
import { fetchMovieData } from "../../apiCalls";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      error: "",
    };
  }

  componentDidMount = () => {
    fetchMovieData(`/${this.state.id}`)
    .then(data => {
        this.setState({movie: data.movie})
    })
    .catch( err => {
        this.setState({error: err.status})
    })
  }

  render() {
    return (
      <article>
        <h2>{this.state.movie.title}</h2>
        <img src={this.state.movie.poster_path} alt="movie poster" />
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
        <button onClick={() => this.props.goBackHome(true)}>Go back to all movies</button>
      </article>
    );
  }
}

export default MovieDetails;
