import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

function ProductCard({ product }) {
  const { title, price, image, id, rating } = product;

  return (
    <li className="border-2 border-red-300 rounded-xl cursor-pointer flex flex-col group">
      <Link to={`products/${id}`}>
        <div className="flex justify-center items-center border-b-2 rounded-xl border-red-100">
          <img
            src={image}
            alt={title}
            className="max-h-72 p-3 m-3 duration-200 group-hover:scale-105"
          />
        </div>
        <div className="p-3 flex flex-col">
          <h2 className="text-center text-xl">{title}</h2>
          {/* <p className="hidden xl:flex text-center">{description}</p> */}
          <p className="text-center text-red-600 text-xl">${price}</p>
          <div className="self-center">
            <StarRating defaultRating={rating.rate} count={rating.count} />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
