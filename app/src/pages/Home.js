import React from "react";

import { Link } from "react-router-dom";
import homeImage from "../assets/coffee-banner.jpg";
import "../styles/Home.css";
const homeImg = `https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg`;

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImg})` }}>
      <div className="headerContainer">
        <h1>Disover the taste of real coffee</h1>
        <Link to="/catalog">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
