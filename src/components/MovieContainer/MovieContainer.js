import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import singleMovieData from "../../mockData/singleMovieData";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieContainer.css";

function MovieContainer({ movieData }) {
  const [displayAllMovies, setDisplayAllMovies] = useState(true);
  // const [singleMovie, setSingleMovie] = useState(singleMovieData.movie);
  const [movieID, setMovieID] = useState();

  const movieCards = movieData.map((movie) => {
    return (
      <MovieCard
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        avgRating={movie.average_rating.toFixed(0)}
        releaseDate={movie.release_date}
        handleClick={setDisplayAllMovies}
        submitId={setMovieID}
      />
    );
  });

  return (
    <div className="movie-container">
      {displayAllMovies ? (
        movieCards
      ) : (
        <MovieDetails 
          id={movieID}
          goBackHome={setDisplayAllMovies}
        />
      )}
    </div>
  );
}

export default MovieContainer;
