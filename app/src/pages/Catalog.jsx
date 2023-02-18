import React from "react";

import { catalogList } from "../helpers/catalogList";
import CatalogItem from "../components/CatalogItem";
import '../styles/Catalog.css';

function Catalog() {

  return <div className="menu">
    <h1 className="catalogTitle">Our Products</h1>
    <div className="catalogList">
      {catalogList.map((catalogItem, key) => {
        return (
          <CatalogItem 
            key={key}
            image={catalogItem.image}
            name={catalogItem.name}
            price={catalogItem.price}
            id={catalogItem.id}
          />
        )
      })}
    </div>
  </div>;
}

export default Catalog;