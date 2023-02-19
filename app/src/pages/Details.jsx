import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

function Details({ coffeInfo }) {
  console.log('coffeInfo', coffeInfo)
  const { coffeeId } = useParams();

  const coffee = coffeInfo.find(x => x.id === coffeeId);
  console.log('coffee', coffee)

  return (
    <div className="details">
      <div className="itemDetails">
        <h1>{coffee.price}</h1>
      </div>
    </div>
  );
}

export default Details;
