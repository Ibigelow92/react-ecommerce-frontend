import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

// Our state is an object with a key of the id of each product
// What we're trying to do is count how many products of any 
// given id are in the cart
// This function is to get the array and create an empty object that represents 
// the initial state of our cart items
const getDefaultCart = () => {
    let cart = {};
    // loops through the entire products array
    // we make i = 1 because ids start with 1, not 0
    // we want to create an object with the ids equal to the ids of the products
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        // gives each item in the array a key equal to the i value above
        // and set it equal to zero
        cart[i] = 0;
    }
    return cart;
} 


// Basically a store in our environment that keeps track of states and functions
// which need to be accessed everywhere in our project. This allows us to change 
// our state in multiple files at once. 
export const ShopContextProvider = (props) => {

// The state is an object with eight properties
// allows us to get the state of our cart without adding anything to the cart
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Just generates the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // loops through every item in the cart items object, sees if there are more than one
    // if they are in the cart, multiply the number times the price and add to total
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // This is to retrieve the price
        // find is an element in js that finds a specific element in an array
        // where some part of it satisfies a condition
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        // cartItems[item] is the amount of a speficic item in a cart
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount;
  }

// Allows us to add an item to the cart
// It takes in the id of an item you want to add 
  const addToCart = (itemId) => {
    // First, it sets the cart items object to be equal to the same object that it was before
    // I also want to grab the item with a specific item id and change it to be 
    // whatever it was before plus one
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

const updateCartItemCount = (newAmount, itemId) => {
    // Instead of increasing or decreasing the thing, we just set it to a totally new amount
    setCartItems((prev) => ({...prev, [itemId]: newAmount }))
}

// We need to pass in everything that we might want to access so that we can 
// pass this into the SchopContext.Provider component
  const contextValue = { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount, 
    getTotalCartAmount, 
  };

  return (
    // We create this whole component to keep track of all the data 
    // and organize all the logic in one place
    // Basically, what this component does is define all the states for our application
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};
// We access ShopContext.Provider in the products component