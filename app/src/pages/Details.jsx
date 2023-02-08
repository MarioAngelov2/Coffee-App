import React, { useState } from "react";
import CatalogItem from "../components/CatalogItem";
import { catalogList } from "../helpers/catalogList";
import '../styles/Details.css';

function Details() {

  const [details, setDetails] = useState();

  console.log(details)

  return (
    <div className="details">
      <div className="itemDetails">
        
      </div>
    </div>
  );
}

export default Details;
