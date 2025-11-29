import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onMovieClick }) => {
  if (movies.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🎬</div>
        <h3>No movies found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieList;

