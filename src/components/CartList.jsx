import React from "react";
import CartCard from "./CartCard";
import Cart from "../pages/cart";

function CartList({ cart }) {
  return (
    <ul>
      <CartCard cart={cart}></CartCard>
    </ul>
  );
}

export default CartList;
