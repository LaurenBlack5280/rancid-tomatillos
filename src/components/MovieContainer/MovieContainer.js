import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import singleMovieData from "../../mockData/singleMovieData";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieContainer.css";
import SearchForm from "../SearchForm/SearchForm";

function MovieContainer({ movieData }) {
  
  const movieCards = movieData.map((movie) => {
    return (
      <MovieCard
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        avgRating={movie.average_rating.toFixed(0)}
        releaseDate={movie.release_date}
      />
    );
  });

  return (
    <div className="movie-container">
      <SearchForm movies={movieData}/>
        {movieCards}
    </div>
  );
}

export default MovieContainer;
