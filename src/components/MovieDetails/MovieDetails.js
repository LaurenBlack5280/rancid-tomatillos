import React from 'react'

const MovieDetails = ({ id, title, poster, backdrop, releaseDate, overview, avgRating, genres, budget, revenue, runtime, tagline, goBackHome }) => {
    return(
        <article>
            <h2>{title}</h2>
            <img src={poster} alt="movie poster" />
            <img src={backdrop} alt="movie backdrop" />
            <p>
                <span>{releaseDate} </span>
                <span>{overview}</span>
                <span>{avgRating}</span>
                <span>{genres}</span>
                <span>{budget}</span>
                <span>{revenue}</span>
                <span>{runtime}</span>
                <span>{tagline}</span>

            </p>
            <button onClick={() => goBackHome()}>Go back to all movies</button>
        </article>
    )
}


export default MovieDetails