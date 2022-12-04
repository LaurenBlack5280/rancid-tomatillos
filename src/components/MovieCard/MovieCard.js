import React from "react";
import "./MovieCard.css";

const MovieCard = ({id, title, poster, avgRating, releaseDate, handleClick}) => {
    return (
        <section className='movie-card'>
            <div>
                <span>{avgRating}</span>
                <img src={poster} alt="movie poster"
                onClick={event => {handleClick(event)}}
                />
            </div>
            <h3>{title}</h3>
            <span>{releaseDate}</span>
        </section>
    )
}

export default MovieCard;
