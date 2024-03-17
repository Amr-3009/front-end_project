import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex w-[100%] h-[85vh]">
      <div className="lg:w-[25%] sm:w-[50%] m-auto p-5">
        <form>
          <input
            type="text"
            className="inputField border-[1px] rounded-lg border-red-200"
            placeholder="Username"
          />
          <input
            type="email"
            className="inputField border-[1px] rounded-lg border-red-200"
            placeholder="Email"
          />
          <input
            type="password"
            className="inputField border-[1px] rounded-lg border-red-200"
            placeholder="Password"
          />
          <input
            type="password"
            className="inputField border-[1px] rounded-lg border-red-200"
            placeholder="Confirm Password"
          />
          <button className="bg-red-200 w-[100%] rounded-lg p-2.5 text-xl mb-5 hover:bg-red-500 font-Azeret hover:text-white">
            Register
          </button>
          <p>
            Have an account already?
            <Link className="text-blue-600 underline ml-1" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
