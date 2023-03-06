import React from "react";
import { useState, useEffect } from "react";

import { getAll } from "../services/getService";
import { catalogList } from "../helpers/catalogList";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({ }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getAll()
      .then(result => {
        setItem(result)
      })
  }, 
  []);

  return (
    <div className="menu">
      <h1 className="catalogTitle">Our Products</h1>
      <div className="catalogList">
        {Object.values(item).map((item) => {
          return <CatalogItem key={item._id} coffee={item} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
