import React from "react";
import { useState, useEffect } from "react";

import Details from "./Details";
import { getAll } from "../services/getService";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({}) {
  const [item, setItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getAll().then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div className="menu">
      <h1 className="catalogTitle">Our Products</h1>
      <div className="catalogList">
        {Object.values(item).map((item) => {
          return (
            <CatalogItem
              key={item._id}
              coffee={item}
              onClick={() => {
                setSelectedItem(item);
                console.log("selected item", item);
              }}
            />
          );
        })}
      </div>
      <Details item={selectedItem} />
    </div>
  );
}

export default Catalog;
