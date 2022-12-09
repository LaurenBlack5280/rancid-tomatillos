import React from "react";
import "./MovieCard.css";
import { NavLink } from "react-router-dom";

const MovieCard = ({ id, title, poster, avgRating, releaseDate, handleClick, submitId }) => {
  return (
    <NavLink to={`/${id}`}>
      <section className="movie-card">
        <div className="movie-card-poster-container">
          <span className="avg-rating">🍅 <b>{avgRating}/10</b></span>
          <img
            src={poster}
            alt="movie poster"
            // onClick={() => {
            //   submitId(id);
            //   handleClick(false);
            // }}
          />
        </div>
        <h3>{title}</h3>
        <span>{releaseDate}</span>
      </section>
    </NavLink>
  );
};

export default MovieCard;
