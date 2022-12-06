import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import movieData from "../../mockData/movieData";
import Hero from "../Hero/Hero";
import { getMovies } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      movies: [],
      movieForHero: {},
      error: ''
    };
  }

  randomMoviePoster = () => {
    const index = Math.floor(Math.random() * this.state.allMovies.length);
    const randomMovie = this.state.allMovies[index];
    return randomMovie;
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      this.setState({
        movies: data.movies
      })
    })
    .catch(err => {
      console.log(`${err.name}, ${err.message}`)
      this.setState({
        error: "Sorry, something went wrong"
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.error && <h2>{this.state.error}</h2>}
        <Header />
        <Hero randomMovie={this.randomMoviePoster()} />
        <MovieContainer movieData={this.state.movies} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
