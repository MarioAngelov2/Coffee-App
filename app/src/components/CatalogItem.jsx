import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

function CatalogItem({ coffee }) {
  // let navigate = useNavigate();
  // onClick={() => {navigate(`/details/${id}`)}}

  return (
    <div className="catalogItem">
      <div style={{ backgroundImage: `url(${coffee.image})` }}></div>
      <h1> {coffee.name} </h1>
      <p> ${coffee.price} </p>
      <Link to={`/details/${coffee.id}`}>Details</Link>
    </div>
  );
}

export default CatalogItem;
