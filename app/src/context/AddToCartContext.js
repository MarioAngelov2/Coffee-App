import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import * as requester from "../services/requester";

const baseUrl = "http://localhost:3030/data/cart";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    requester.get(baseUrl).then((response) => {
      setCartItems(response);
    });
  }, []);

  const addItemToCart = (item) => {
    requester.post(baseUrl, item);

    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    requester.del(`${baseUrl}/${itemId}`);

    setCartItems(cartItems.filter((x) => x._id !== itemId));
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
