import React, { useState } from "react";

export default function StarRating({
  color = "#B91C1C",
  number = 5,
  size = "30px",
  defaultRating = 0,
  count = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);

  const starContainer = {
    display: "flex",
  };

  const length = Array.from({ length: number }, (_, i) => i + 1);
  return (
    <div>
      <div style={starContainer}>
        {length.map((num, i) => (
          <Star
            key={num}
            color={color}
            size={size}
            rating={Math.round(rating)}
            num={num}
            onRate={setRating}
            onSetRating={onSetRating}
          />
        ))}
        <p className="self-center ml-1 text-xl text-red-600">{`(${count})`}</p>
      </div>
    </div>
  );
}

function Star({ color, size, rating, num, onRate, onSetRating }) {
  const isSelected = num <= rating;

  const starStyle = {
    display: "block",
  };

  return (
    <span style={starStyle}>
      {isSelected ? (
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
    </span>
  );
}
