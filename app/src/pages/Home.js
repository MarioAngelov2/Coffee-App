import React from "react";

import { Link } from "react-router-dom";
import homeImage from "../assets/coffee-banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="headerContainer">
        <h1>The Best Coffee Ever</h1>
      <Link to="/catalog">
        <button>ORDER NOW</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
