import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieContainer.css"

const MovieContainer = ({movieData}) => {
    const movieCards = movieData.map(movie => {
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
    console.log(movieCards)
    return (
        <main className='movie-container'>
            {movieCards}
        </main>
    )
}


export default MovieContainer