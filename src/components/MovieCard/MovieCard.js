import React from "react";
import "./MovieCard.css";

const MovieCard = ({ id, title, poster, avgRating, releaseDate }) => {
  return (
    <section className="movie-card">
      <div className="movie-card-poster-container">
        <span>{avgRating}</span>
        <img src={poster} alt="movie poster" />
      </div>
      <h3>{title}</h3>
      <span>{releaseDate}</span>
    </section>
  );
};

export default MovieCard;
