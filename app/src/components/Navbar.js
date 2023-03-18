import React from "react";
import "../styles/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">Home</Link>
        <Link to="/catalog">Our Products</Link>
        <Link to="/about">About</Link>
        {user.email ? (
          <div id="user">
            <Link to="/create">Create Coffee</Link>
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div id="guest">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
      <div className="rightSide"></div>
    </div>
  );
}

export default Navbar;
