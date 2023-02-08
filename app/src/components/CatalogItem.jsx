import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { catalogItemContext } from "../context/catalogItemContext";

function CatalogItem({ image, name, price, id }) {

  let navigate = useNavigate();

  return (
    <div className="catalogItem" onClick={() => {navigate(`/details/${id}`)}}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default CatalogItem;
