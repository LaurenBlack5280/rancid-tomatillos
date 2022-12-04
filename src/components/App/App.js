import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => {
      // console.log('response', res)
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(data => {
      console.log('hello')
      console.log('show me the $', data)
      console.log('we have data', data.movies)
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
        <MovieContainer movieData={this.state.movies} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
