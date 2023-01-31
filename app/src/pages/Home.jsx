import React from "react";

import { Link } from "react-router-dom";
import homeImage from "../assets/coffee-banner.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="headerContainer">The Best Coffee Ever</div>
      <Link to="/catalog">
        <button>ORDER NOW</button>
      </Link>
    </div>
  );
}

export default Home;
