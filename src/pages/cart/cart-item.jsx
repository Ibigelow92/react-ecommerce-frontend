import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} />
        <div className="description">
            <p>
                <b> {productName} </b>
            </p>
            <p> ${price} </p>
            {/* For specifying how many units of an item you want to buy */}
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                {/* Sets default value */}
                {/* onChange lets us grab the event */}
                {/* e.target.value starts as a string, so we convert it into a number */}
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};
