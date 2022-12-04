import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import singleMovieData from "../../mockData/singleMovieData";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieContainer.css";

class MovieContainer extends Component {
  constructor(props) {
    // do props need to be passed down through super?
    super(props);
    this.state = {
      movieData: this.props.movieData,
      singleMovie: singleMovieData.movie,
      displayAllMovies: true,
    };
  }

  // componentDidMount = () => {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${this.state.id}`)
  //   .then(res => {
  //     console.log('response', res)
  //     if(!res.ok) {
  //       throw new Error()
  //     }
  //     return res.json()
  //   })
  //   .then(data => {

  //   })
  //   .catch(err => {
  //     console.log(`${err.name}, ${err.statusText}`)
  //   })
  // }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ displayAllMovies: false });
    //event.target.id
  };

  goBackHome = () => {
    console.log("GO HOME ROGER!!");
    this.setState({ displayAllMovies: true });
  };

  sortMovies = () => {
    const movieCards = this.state.movieData.map((movie) => {
      return (
        <MovieCard
          id={movie.id}
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          avgRating={movie.average_rating.toFixed(0)}
          releaseDate={movie.release_date}
          handleClick={this.handleClick}
        />
      );
    });

    return movieCards;
  };

  render() {
    console.log(this.state.singleMovie);
    return (
      <main className="movie-container">
        {this.state.displayAllMovies ? (
          this.sortMovies()
        ) : (
          <MovieDetails
            id={this.state.singleMovie.id}
            key={this.state.singleMovie.id}
            poster={this.state.singleMovie.poster_path}
            backdrop={this.state.singleMovie.backdrop_path}
            title={this.state.singleMovie.title}
            avgRating={this.state.singleMovie.average_rating.toFixed(0)}
            releaseDate={this.state.singleMovie.release_date}
            overview={this.state.singleMovie.overview}
            genres={this.state.singleMovie.genres}
            budget={this.state.singleMovie.budget}
            revenue={this.state.singleMovie.revenue}
            runtime={this.state.singleMovie.runtime}
            tagline={this.state.singleMovie.tagline}
            goBackHome={this.goBackHome}
          />
        )}
      </main>
    );
  }
}

export default MovieContainer;
