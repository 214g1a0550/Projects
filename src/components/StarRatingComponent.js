import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRatingComponent = () => {
  const [rating, setRating] = useState(0);

  // Function to handle rating change
  const changeRating = (newRating) => {
    setRating(newRating);
    // You can add additional logic here, like updating your database with the new rating
  };

  return (
    <div>
      <h2>Rate this</h2>
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="30px"
        starSpacing="5px"
      />
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default StarRatingComponent;
