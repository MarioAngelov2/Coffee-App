import React from "react";
import CatalogItem from "../components/CatalogItem";
import { catalogList } from "../helpers/catalogList";
import '../styles/Details.css';

function Details() {
  return (
    <div className="details">
      <div className="itemDetails">
        {
          catalogList.map((itemDetail, key) => {
            return(
              <CatalogItem 
              key={key}
              image={itemDetail.image}
              name={itemDetail.name}
              price={itemDetail.price}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Details;
