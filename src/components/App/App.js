import './App.css';
import React, {Component} from 'react'
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  render() {
  return (
    <div className='App'>
      <Header />
      <MovieContainer />
      {/* <Footer /> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
  }
}

export default App;
