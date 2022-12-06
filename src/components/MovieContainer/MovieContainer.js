import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import singleMovieData from "../../mockData/singleMovieData";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./MovieContainer.css";

function MovieContainer({ movieData }) {
  const [displayAllMovies, setDisplayAllMovies] = useState(true);
  const [singleMovie, setSingleMovie] = useState(singleMovieData.movie);

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
      />
    );
  });

  return (
    <div className="movie-container">
      {displayAllMovies ? (
        movieCards
      ) : (
        <MovieDetails
          id={singleMovie.id}
          key={singleMovie.id}
          poster={singleMovie.poster_path}
          backdrop={singleMovie.backdrop_path}
          title={singleMovie.title}
          avgRating={singleMovie.average_rating.toFixed(0)}
          releaseDate={singleMovie.release_date}
          overview={singleMovie.overview}
          genres={singleMovie.genres}
          budget={singleMovie.budget}
          revenue={singleMovie.revenue}
          runtime={singleMovie.runtime}
          tagline={singleMovie.tagline}
          goBackHome={setDisplayAllMovies}
        />
      )}
    </div>
  );
}

export default MovieContainer;
