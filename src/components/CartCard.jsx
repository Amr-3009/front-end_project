import React from "react";

function CartCard({ cart }) {
  const { id, userId, date, products } = cart;
  return (
    <li>
      <div>
        <h1>Cart {id}</h1>
        <h2>User {userId}</h2>
        <h3>Date {date}</h3>
        <ul>
          {products.map((product) => {
            return <li key={product.productId}>{product.productId}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

export default CartCard;
