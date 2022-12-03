import React from 'react'

const MovieCard = ({id, title, poster, avgRating, releaseDate}) => {
    return (
        <section className='movie-card'>
            <div>
                <img src={poster} alt="movie poster"
                onClick={() => {
                    console.log('hi')

                    }
                }
                />
            </div>
            <h3>{title}</h3>
            <span>{releaseDate}</span>
            <span>{avgRating}</span>
        </section>
    )
}

export default MovieCard