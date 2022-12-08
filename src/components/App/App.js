import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import movieData from "../../mockData/movieData";
import Hero from "../Hero/Hero";
import { fetchMovieData } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      movies: [],
      movieForHero: {},
      error: "",
      isLoading: true,
    };
  }

  generateRandomMoviePoster = () => {
    const index = Math.floor(Math.random() * this.state.allMovies.length);
    const randomMovie = this.state.allMovies[index];
    this.setState({
      movieForHero: randomMovie,
      isLoading: false,
    });
  };

  componentDidMount = () => {
    fetchMovieData("")
      .then((data) => {
        this.setState({ movies: data.movies});
        this.generateRandomMoviePoster();
      })
      .catch((err) => {
        console.log(`${err.name}, ${err.message}`);
        this.setState({ error: "Sorry, something went wrong" });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        {/* {this.state.error && <h2>{this.state.error}</h2>} */}
        <Header />
        <main>
          <Hero randomMovie={this.state.movieForHero} />

          <MovieContainer movieData={this.state.movies} />
        </main>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
