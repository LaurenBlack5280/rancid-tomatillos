import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import singleMovie from '../../mockData/singleMovieData'
import MovieDetails from '../MovieDetails/MovieDetails';

class MovieContainer extends Component {
    constructor(props) {
        // do props need to be passed down through super?
        super(props);
        this.state = {
            movieData: this.props.movieData,
            singleMovie: {}
        }
    }
    
    handleClick = event => {
        event.preventDefault()
        this.setState({singleMovie: singleMovie.movie})
        console.log(singleMovie)
        //event.target.id 
    }
    sortMovies = () => {
        const movieCards = this.state.movieData.map(movie => {
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
            )
        })

        return movieCards
    }

    render() {
        console.log(this.state.singleMovie)
        return (
            <main className='movie-container'>
                {/* {!this.state.singleMovie? <MovieDetails /> } */}
                {this.sortMovies()}
            </main>
        )
    }
    
}


export default MovieContainer