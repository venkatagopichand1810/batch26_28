import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ rating, onRate, readOnly = false, size = 'medium' }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (!readOnly && onRate) {
      onRate(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (!readOnly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={`star-rating ${size} ${readOnly ? 'read-only' : 'interactive'}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= displayRating ? 'filled' : ''} ${
            star <= Math.floor(displayRating) ? 'full' : ''
          } ${
            star === Math.ceil(displayRating) && displayRating % 1 !== 0 ? 'half' : ''
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

