import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

function Details({ coffeInfo }) {
  const { id } = useParams();
  console.log('coffeeId:', id);
  console.log('coffeInfo', coffeInfo)


  // const coffee = Object.values(coffeInfo).find((x) => x.id === id);
  const coffee = coffeInfo.find((coffee) => coffee.id === id);
  // console.log('coffee', coffee)

  return (
    <div className="details">
      <div className="itemDetails">
        <h1>{coffee.price}</h1>
      </div>
    </div>
  );
}

export default Details;
