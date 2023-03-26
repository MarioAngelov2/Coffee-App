import { createCoffeeService } from "../services/createService";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

import "../styles/CreateCoffee.css";

function CreateCoffee() {
  const { addNewItem } = useContext(DataContext);
  const [inputs, setInputs] = useState({
    imageUrl: "",
    name: "",
    price: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target));

    createCoffeeService(productData).then((result) => {
      addNewItem(result);
      setInputs({
        imageUrl: "",
        name: "",
        price: "",
      });
    });
  };

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
            value={inputs.imageUrl}
            onChange={handleInputChange}
          />
          <label>Coffee Name</label>
          <input
            type="text"
            name="name"
            placeholder="Text coffee name..."
            value={inputs.name}
            onChange={handleInputChange}
          />
          <label>Coffee Price</label>
          <input
            type="text"
            name="price"
            placeholder="Coffee price..."
            value={inputs.price}
            onChange={handleInputChange}
          />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCoffee;
