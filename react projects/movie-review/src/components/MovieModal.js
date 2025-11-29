import React from 'react';
import StarRating from './StarRating';
import { useMovieContext } from '../context/MovieContext';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  const { rateMovie, getUserRating } = useMovieContext();
  const userRating = getUserRating(movie.id);

  const handleRate = (rating) => {
    rateMovie(movie.id, rating);
  };

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-poster">
            <img src={movie.poster} alt={movie.title} />
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{movie.title}</h2>
            
            <div className="modal-meta">
              <span className="meta-item">
                <strong>Year:</strong> {movie.year}
              </span>
              <span className="meta-item">
                <strong>Genre:</strong> {movie.genre}
              </span>
              <span className="meta-item">
                <strong>Runtime:</strong> {movie.runtime}
              </span>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Plot</h3>
              <p className="section-content">{movie.plot}</p>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Director</h3>
              <p className="section-content">{movie.director}</p>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Cast</h3>
              <p className="section-content">{movie.cast}</p>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Average Rating</h3>
              <div className="rating-display">
                <StarRating rating={movie.rating} readOnly size="large" />
                <span className="rating-number">{movie.rating.toFixed(1)} / 5.0</span>
              </div>
            </div>

            <div className="modal-section user-rating-section">
              <h3 className="section-title">Your Rating</h3>
              <div className="user-rating-container">
                <StarRating 
                  rating={userRating} 
                  onRate={handleRate} 
                  size="large" 
                />
                {userRating > 0 && (
                  <span className="rating-number">
                    You rated: {userRating} / 5
                  </span>
                )}
                {userRating === 0 && (
                  <span className="rating-prompt">
                    Click to rate this movie
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

