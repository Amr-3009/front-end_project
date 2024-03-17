import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="lg:w-[50%] sm:w-[100%] m-auto p-3">
      <h1
        className="text-3xl font-Azeret text-red-600 text-center
      m-3 p-3 border-2 border-red-600 rounded-lg bg-red-100"
      >
        Cart
      </h1>
      <ul className="">
        <li>
          <div className="flex m-3 p-3 border-2 border-red-600 rounded-lg justify-between">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mr-4 rounded-lg"
            />
            <div className="flex flex-col justify-center place-content-center gap-y-10 w-[70%]">
              <p>Product Name</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className=" h-[10%] ">
              <button className="text-xl bg-red-100 m-3 p-3 rounded-lg font-Azeret hover:bg-red-500 hover:text-white">
                Remove
              </button>
            </div>
          </div>
        </li>
        <li>
          <div className="flex m-3 p-3 border-2 border-red-600 rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mr-4 rounded-lg"
            />
            <div className="flex flex-col justify-center place-content-center gap-y-10 w-[70%]">
              <p>Product Name</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className=" h-[10%] ]">
              <button className="text-xl bg-red-100 m-3 p-3 rounded-lg font-Azeret hover:bg-red-500 hover:text-white">
                Remove
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex flex-col">
        <button className="text-xl bg-red-100 m-3 p-3 rounded-lg font-Azeret hover:bg-red-500 hover:text-white">
          Checkout
        </button>
        <button className="text-xl bg-red-100 m-3 p-3 rounded-lg font-Azeret hover:bg-red-500 hover:text-white">
          Clear Cart
        </button>
        <Link
          className="justify-center place-content-center items-center flex"
          to="/"
        >
          <button className="text-xl bg-red-100 m-3 p-3 rounded-lg font-Azeret w-[100%] hover:bg-red-500 hover:text-white">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
