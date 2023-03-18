import React from "react";
import { useState } from "react";
import { createCoffeeService } from "../services/createService";

import "../styles/CreateCoffee.css";

function CreateCoffee() {
  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target));
    
    createCoffeeService(productData)
      .then(result => {
        console.log(result)
      })

  };

  return (
    <div className="create-coffee-container">
      <form onSubmit={onSubmit}>
        <div className="create-coffee-content">
          <h2>Create your coffee</h2>
          <label>Coffee Image</label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Paste image url..."
          />
          <label>Coffee Name</label>
          <input
            type="text"
            name="name"
            placeholder="Text coffee name..."
          />
          <label>Coffee Price</label>
          <input type="text" name="price" placeholder="Coffee price..." />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCoffee;
