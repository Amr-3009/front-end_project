import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_dark.png";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink
            className="hover:text-red-700 hover:cursor-pointer font-Azeret text-2xl p-3 hover:bg-red-100 rounded-full"
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
        <li className="min-w-[200px]">
          <NavLink
            className="hover:text-red-700 hover:cursor-pointer font-Azeret text-2xl p-3 hover:bg-red-100 rounded-full"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
