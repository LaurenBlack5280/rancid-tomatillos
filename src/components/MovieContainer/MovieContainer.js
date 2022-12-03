import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import singleMovie from 'src/mockData/singleMovieData.js'

class MovieContainer extends Component {
    constructor(props) {
        // do props need to be passed down through super?
        super(props);
        this.state = {
            movieData: this.props.movieData,
            singleMovie: []
        }
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
                />
            )
        })

        return movieCards
    }

    render() {
        return (
            <main className='movie-container'>
                {this.sortMovies()}
            </main>
        )
    }
    
}


export default MovieContainer