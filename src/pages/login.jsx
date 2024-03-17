import { Link } from "react-router-dom";
import "./login.css";

function login() {
  return (
    <div className="flex w-[100%] h-[85vh]">
      <div className="lg:w-[25%] sm:w-[50%] m-auto p-5">
        <form>
          <input
            className="inputField border-[1px] rounded-lg border-red-200"
            type="text"
            placeholder="Username"
          />
          <input
            className="inputField border-[1px] rounded-lg border-red-200"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-200 w-[100%] rounded-lg p-2.5 text-xl mb-5 hover:bg-red-500 font-Azeret hover:text-white">
            Login
          </button>
        </form>
        <p>
          Don't have an account?
          <Link className="text-blue-600 underline ml-1" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default login;
