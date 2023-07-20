import React, { useContext } from "react";
// We need to import ShopContext to have access to the associated functions and logic
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
// Here, we're getting all the data that each project has
  const { id, productName, price, productImage } = props.data;
  // useContext is a hook that comes with React which automatically imports
  // gives us access to the addToCart function
  // We need access to the cartitems state to see how many items we have in our cart
  const { addToCart, cartItems } = useContext(ShopContext);

  // We need to know the cart item because we want to display the number of 
  // such and such product in the cart if it's greater than zero 
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        {/* We connect the addToCart function to the addToCartBttn button */}
        {/* It requires the ID to the item you want to add */}
        {/* The ID to the element we want to add exists as we pass it through props */}
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          {/* If cartItemAmount is greater than zero, thne I want to display a set of
          parenthesis with the actual cart item amount */}
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );
};