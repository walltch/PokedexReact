import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const RatingBarComponent = ({ initialRating = 0, maxRating = 5, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (event) => {
    const newValue = event.target.value;
    setRating(newValue);
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <div className="w-64">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Rate this product
      </label>
      <input
        type="range"
        min="0"
        max={maxRating}
        step="0.5"
        value={rating}
        onChange={handleRatingChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
      />
      <div className="text-center mt-2">Rating: {rating}</div>
    </div>
  );
};

export default RatingBarComponent;
