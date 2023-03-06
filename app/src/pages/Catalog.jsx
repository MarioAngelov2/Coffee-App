import React from "react";

import { catalogList } from "../helpers/catalogList";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css";

function Catalog({ coffeInfo }) {
  return (
    <div className="menu">
      <h1 className="catalogTitle">Our Products</h1>
      <div className="catalogList">
        {coffeInfo.map((item) => {
          return <CatalogItem key={item.id} coffee={item} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;