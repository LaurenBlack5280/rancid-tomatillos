import './App.css';
import React, {Component} from 'react'
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import movieData from "../../mockData/movieData"


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
  return (
    <div className='App'>
      <Header />
      <MovieContainer movieData={this.state.movies}/>
      {/* <Footer /> */}
    </div>
  );
  }
}

export default App;
