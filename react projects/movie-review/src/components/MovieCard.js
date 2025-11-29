import React from 'react';
import StarRating from './StarRating';
import { useMovieContext } from '../context/MovieContext';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
  const { getUserRating } = useMovieContext();
  const userRating = getUserRating(movie.id);

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-year">{movie.year}</div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-genre">{movie.genre}</div>
        <div className="movie-ratings">
          <div className="average-rating">
            <StarRating rating={movie.rating} readOnly size="small" />
            <span className="rating-value">{movie.rating.toFixed(1)}</span>
          </div>
          {userRating > 0 && (
            <div className="user-rating-badge">
              Your rating: {userRating} ⭐
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

