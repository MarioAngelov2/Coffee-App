import React from "react";
import { useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";

import Details from "./Details";
import { getAll } from "../services/getService";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({}) {
  const [item, setItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addNewItem = (newItem) => {
    setItem([...item, newItem]);
  };


  useEffect(() => {
    getAll().then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <DataContext.Provider value={{ addNewItem }}>
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
                }}
              />
            );
          })}
        </div>
        <Details item={selectedItem} />
      </div>
    </DataContext.Provider>
  );
}

export default Catalog;
