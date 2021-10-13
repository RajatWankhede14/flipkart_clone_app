import React from "react";
import "../App.css";

function ProductCard() {
  return (
    <div className="product_div">
      <img src="https://www.kvstech.com/img/service/product.jpg" alt="imag-1" />
      <h2 className="text-center">Redmi 9 Pro</h2>
      <p className="text-center">$ 14999</p>
    </div>
  );
}

export default ProductCard;
