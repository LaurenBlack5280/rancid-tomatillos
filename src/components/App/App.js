import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import movieData from "../../mockData/movieData";
import Hero from "../Hero/Hero";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movieForHero: {},
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
        <Header />
        <Hero randomMovie={this.randomMoviePoster()} />
        <MovieContainer movieData={this.state.movies} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
