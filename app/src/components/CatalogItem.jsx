import React from "react";
import { Link } from "react-router-dom";

function CatalogItem({ image, name, price }) {
  return (
    <div className="catalogItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <Link to="/details"></Link>
    </div>
  );
}

export default CatalogItem;
