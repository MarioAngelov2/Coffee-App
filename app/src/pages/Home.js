import React from "react";

import { Link } from "react-router-dom";
import homeImage from "../assets/coffee-banner.jpg";
import { ThemeProvider } from "@mui/material";
import { whiteTheme } from "../theme/theme";
import Button from "@mui/material/Button";
import "../styles/Home.css";
const homeImg = `https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg`;

function Home() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <div className="home" style={{ backgroundImage: `url(${homeImg})` }}>
        <div className="headerContainer">
          <h1>Disover the taste of real coffee</h1>
          <Link to="/catalog">
            <Button variant="outlined" className="orderBtn">Order Now</Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
