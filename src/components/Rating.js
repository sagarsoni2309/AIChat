import React from "react";
import "../styles/Rating.css";

const Rating = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;