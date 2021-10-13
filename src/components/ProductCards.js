import React from "react";
import ProductCard from "./ProductCard";
import "../App.css";

function ProductCards() {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }
  return (
    <div className="products_row">
      {arr.map((a) => (
        <ProductCard />
      ))}
    </div>
  );
}

export default ProductCards;
