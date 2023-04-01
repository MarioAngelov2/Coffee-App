import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/AddToCartContext";
import { AuthContext } from "../context/AuthContext";

function Cart() {
  const { cartItems, removeItemFromCart } = useContext(ShopContext);
  const { user } = useContext(AuthContext);

  const handleDeleteItem = (id) => {
    removeItemFromCart(id);
  };

  const userCartItem = cartItems.filter((item) => user?._id === item._ownerId)

  return (
    <div>
      <h2>Cart</h2>
      {user && user._id ? (
        userCartItem.length > 0 ? (
          userCartItem.map((x) => (
            <div key={x._id}>
              {x.name} - {x.price}
              <button onClick={() => handleDeleteItem(x._id)}>Delete</button>
            </div>
          ))
        ) : (
          <div>No items in cart</div>
        )
      ) : (
        <div>Please log in to view your cart</div>
      )}
    </div>
  );
}

export default Cart;
