import { createCoffeeService } from "../services/createService";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

import "../styles/CreateCoffee.css";
const img = `https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg`;

function CreateCoffee() {
  const { addNewItem } = useContext(DataContext);
  const [isDisableButton, setIsDisableButton] = useState(false);
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

  useEffect(() => {
    if (inputs.imageUrl === "" || inputs.name === "" || inputs.price === "") {
      setIsDisableButton(true);
    } else {
      setIsDisableButton(false);
    }
  }, [inputs]);

  return (
    <ThemeProvider theme={theme}>
      <div className="create-coffee-container">
        <div
          className="leftSideCreateCoffee"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="rightSideCreateCoffee">
          <form onSubmit={onSubmit}>
            <div className="create-coffee-content">
              <h2>Create your coffee</h2>
              <TextField
                label="Coffe Image"
                type="url"
                name="imageUrl"
                value={inputs.imageUrl}
                onChange={handleInputChange}
              />
              <TextField
                label="Coffe Name"
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
              />
              <TextField
                label="Coffe Price"
                type="text"
                name="price"
                value={inputs.price}
                onChange={handleInputChange}
              />
              <Button disabled={isDisableButton} type="submit">
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CreateCoffee;
