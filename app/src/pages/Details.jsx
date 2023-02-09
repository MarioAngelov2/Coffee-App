import React, { useState } from "react";
import CatalogItem from "../components/CatalogItem";
import { catalogList } from "../helpers/catalogList";
import '../styles/Details.css';

function Details({
  props
}) {

  return (
    <div className="details">
      <div className="itemDetails">
       <h1></h1>
       <h2>mario</h2>
      </div>
    </div>
  );
}

export default Details;
