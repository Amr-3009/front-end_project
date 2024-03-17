import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { title, price, image, description } = product;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="ProductContainer">
      <div className="lg:w-[25%] mx-auto xl:border-red-400 xl:border-[1px] xl:rounded-2xl flex items-center">
        <img src={image} alt={title} className="max-h-96 mx-auto my-5 mb-7" />
      </div>
      <div className="lg:w-[50%] m-auto p-5 lg:rounded-2xl bg-red-50 infoContainer lg:border-red-400 lg:border-[1px]">
        <h2 className="text-2xl my-5 bg-red-200 text-center rounded-full p-3">
          {title}
        </h2>
        <p className="text-2xl my-5">{description}</p>
        <p className="text-2xl my-5 text-center text-red-600">${price}</p>
        <div className="btnParent">
          <button className="text-2xl bg-red-400 min-w-[200px] centerBtn hover:bg-red-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
