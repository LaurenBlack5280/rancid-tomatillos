import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import {getMovies} from "../../apiCalls/apiCalls";


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount = () => {
    getMovies()
    .then(data => {
        this.setState({ movies: data.movies})
    })
    .catch(err => {
      console.log(`${err.name}, ${err.statusText}`)
    })
  }


  randomMoviePoster = () => {
    const index = Math.floor(Math.random() * this.state.movies.length);
    const randomMovie = this.state.movies[index];
    return randomMovie;
  };

  render() {
    return (
      <div className="App">
        {/* <Header randomMovie={this.randomMoviePoster()} /> */}
        <Header  />
        <MovieContainer movieData={this.state.movies} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
