import "./App.css";
import React, { Component } from "react";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import movieData from "../../mockData/movieData";
import Hero from "../Hero/Hero";
import { fetchMovieData } from "../../apiCalls";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Route, Switch } from 'react-router-dom'
import SearchForm from "../SearchForm/SearchForm";

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
    if (this.state.movies) {
      const index = Math.floor(Math.random() * this.state.allMovies.length);
      const randomMovie = this.state.allMovies[index];
      this.setState({
        movieForHero: randomMovie,
        isLoading: false,
      });
    }
  };

  componentDidMount = () => {
    fetchMovieData("")
      .then((data) => {
        this.setState({ movies: data.movies});
        this.generateRandomMoviePoster()
      })
      .catch((err) => {
        console.log(`${err.name}, ${err.message}`);
        this.setState({ 
          isLoading: false,
          error: "Sorry, something went wrong" 
        });
      });
  };

  updateMovies = (filteredMovies) => {
    this.setState({
      movies: filteredMovies
    })
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    // } else if(this.state.error) {
    //   return (
    //     <div >
    //       <Header />
    //       <div className="error-page">
    //         <h2>{this.state.error}</h2>
    //       </div>
    //       {/* <Footer /> */}
    //     </div>
    //   )
    // }
    else{
      return (
        <div className="App">
          <Header />
          {this.state.error ? (
            <div className="error-page">
               <div>
                 <h2>{this.state.error}</h2>
               </div>
             </div>
          ) : (
          <main>
            <Switch>
              <Route exact path="/">
                <Hero randomMovie={this.state.movieForHero} />
                <MovieContainer movieData={this.state.movies} updateMovies={this.updateMovies} />
                {/* {SearchForm.state.movieSearched && 
                <MovieContainer movieData={filteredMovies} />} */}
              </Route>
            
             <Route path="/:id" 
              render={({match}) => {
                return <MovieDetails id={match.params.id} />
              }}
            />
            </Switch>
          </main>

          )}
  
          {/* <Footer /> */}
        </div>
      );
    }
    // return (
    //   <div className="App">
    //     <Header />
    //     <main>
    //       <Switch>
    //         <Route exact path="/">
    //           <Hero randomMovie={this.state.movieForHero} />
    //           <MovieContainer movieData={this.state.movies} />
    //         </Route>      
    //        <Route path="/:id" 
    //         render={({match}) => {
    //           return <MovieDetails id={match.params.id} />
    //         }}
    //       />
    //       </Switch>
    //     </main>

    //     {/* <Footer /> */}
    //   </div>
    // );
  }
}

export default App;
