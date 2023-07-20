import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          // We only want to show the items from the products array that are also in our cart 
          // We know if a product from the products array is in our cart if the cart items object
          // with the key equal to the products ID has a value greater than zero
          if (cartItems[product.id] !== 0) {
            // If an item is in your cart, it returns a whole new component, CartItem
            // Passes in the product as a prop
            return <CartItem data={product} />;
          }
        })}
      </div>
{totalAmount > 0 ? (
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button> Checkout </button>
      </div>
    ) : (
      <h1> Your Cart is Empty </h1>
    )}
    </div>
  );
};
