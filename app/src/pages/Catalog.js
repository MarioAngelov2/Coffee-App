import React from "react";
import { useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { CatalogStateContext } from "../context/DataContext";
import { getAll } from "../services/getService";
import Cart from "./Cart";

import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({}) {
  const [item, setItem] = useState([]);

  const addNewItem = async (newItem) => {
    setItem([...item, newItem]);
  };

  useEffect(() => {
    getAll().then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <CatalogStateContext.Provider value={{ item: item, setItem }}>
      <DataContext.Provider value={{ addNewItem }}>
        <div className="menu">
          <h1 className="catalogTitle">Our Products</h1>
          <div className="catalogList">
            {Object.values(item).map((item) => {
              return <CatalogItem key={item._id} coffee={item} />;
            })}
          </div>
        </div>
      </DataContext.Provider>
    </CatalogStateContext.Provider>
  );
}

export default Catalog;
