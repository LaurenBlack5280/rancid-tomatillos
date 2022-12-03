import React from 'react'

const MovieCard = ({id, title, poster, avgRating, releaseDate, handleClick}) => {
    return (
        <section className='movie-card'>
            <div>
                <img src={poster} alt="movie poster"
                onClick={event => {handleClick(event)}}
                />
            </div>
            <h3>{title}</h3>
            <span>{releaseDate}</span>
            <span>{avgRating}</span>
        </section>
    )
}

export default MovieCard