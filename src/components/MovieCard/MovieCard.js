import React from "react";
import "./MovieCard.css";

const MovieCard = ({ id, title, poster, avgRating, releaseDate, handleClick }) => {
  return (
    <section className="movie-card">
      <div className="movie-card-poster-container">
        <span className="avg-rating">🍅 <b>{avgRating}/10</b></span>
        <img
          src={poster}
          alt="movie poster"
          onClick={() => {
            handleClick(false);
          }}
        />
      </div>
      <h3>{title}</h3>
      <span>{releaseDate}</span>
    </section>
  );
};

export default MovieCard;
