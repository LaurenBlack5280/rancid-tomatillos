import React from 'react'

const MovieCard = (props) => {
    return (
        <section className='movie-card'>
            <div>
                <image src={props.poster_path} alt="movie poster"/>
            </div>
            <h3>{props.title}</h3>
            <span>{props.release_date}</span>
        </section>
    )
}

export default MovieCard