import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/AddToCartContext";

function Cart() {
  const { cartItems, removeItemFromCart } = useContext(ShopContext);

  const handleDeleteItem = (id) => {
    removeItemFromCart(id);
  };

  return (
    <div>
      <h2>Cart</h2>
    {
      cartItems.map(x => (
        <div key={x._id}>
          {x.name} - {x.price}
          <button onClick={() => handleDeleteItem(x._id)}>Delete</button>
        </div>
      ))
    }
    </div>
  );
}

export default Cart;


// {Array.isArray(cartItems) && cartItems.length > 0 ? (
//   cartItems.map((item) => (
//     <div key={item._id}>
//       <p>
//         {item.name} - {item.price}
//       </p>
//       <button onClick={() => handleDeleteItem(item._id)}>
//         Remove from cart
//       </button>
//     </div>
//   ))
// ) : (
//   <div>No items</div>
// )}