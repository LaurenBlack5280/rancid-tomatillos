import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import movieData from "../../mockData/movieData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  randomMoviePoster = () => {
    const index = Math.floor(Math.random() * this.state.movies.length);
    const randomMovie = this.state.movies[index];
    return randomMovie;
  };

  render() {
    return (
      <div className="App">
        <Header randomMovie={this.randomMoviePoster()} />
        <MovieContainer movieData={this.state.movies} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
