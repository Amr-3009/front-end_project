import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul className="p-2 mx-4 my-4 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </ul>
  );
}

export default ProductList;
