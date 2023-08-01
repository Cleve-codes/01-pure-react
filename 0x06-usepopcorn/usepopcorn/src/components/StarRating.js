import React from "react";

const StarRating = () => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>S{i + 1}</span>
      ))}
      <p>10</p>
    </div>
  );
};

export default StarRating;
