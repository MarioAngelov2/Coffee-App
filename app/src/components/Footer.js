import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="footer">
      <p> &copy; 2023 Coffe Shop</p>
      <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Footer;
