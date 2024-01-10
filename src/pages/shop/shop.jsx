import "./shop.css";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1> Shoppapalooza </h1>
        </div>
        <div className="products"> 
            {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
        </div>
    </div>
  )
}
