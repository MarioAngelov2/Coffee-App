import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">Home</Link>
        <Link to="/catalog">Our Products</Link>
        <Link to="/create">Create Coffee</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <div className="rightSide">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
