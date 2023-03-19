import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemModal from "./ItemModal";

function CatalogItem({ coffee }) {
  // let navigate = useNavigate();
  // onClick={() => {navigate(`/details/${id}`)}}

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="catalogItem" onClick={handleItemClick}>
        <div style={{ backgroundImage: `url(${coffee.imageUrl})` }}></div>
        <h1> {coffee.name} </h1>
        <p> ${coffee.price} </p>
        {/* <Link to={`/details/${coffee._id}`}>Details</Link> */}
      </div>
      {
        isModalOpen && <ItemModal coffee={coffee} onClose={handleCloseModal} />
      }
    </>
  );
}

export default CatalogItem;
