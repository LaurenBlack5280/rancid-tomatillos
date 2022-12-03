import React from 'react'

const MovieDetails = ({ id, title, posterPath, backdropPath, releaseDate, overview, avgRating, genres, budget, revenue, runtime, tagline }) => {
    return(
        <article>
            <h2>{title}</h2>
            <img src={backdropPath} alt="movie backdrop" />
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
        </article>
    )
}


export default MovieDetails