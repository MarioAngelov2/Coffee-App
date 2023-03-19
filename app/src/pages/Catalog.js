import React from "react";
import { useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getAll } from "../services/getService";

import ItemModal from "../components/ItemModal";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({}) {
  const [item, setItem] = useState([]);

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
            return <CatalogItem key={item._id} coffee={item}  />;
          })}
        </div>
      
      </div>
    </DataContext.Provider>
  );
}

export default Catalog;
