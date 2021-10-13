import React from "react";
import ProductCards from "./ProductCards";

function ProductSection({ title }) {
  return (
    <div className="mx-5 border rounded-md shadow-lg p-5 my-6 bg-white">
      <div className="flex justify-between px-3 sm:px-12 py-3 border-b-2">
        <h1 className="align-middle py-2 font-semibold sm:text-2xl text-base">
          {title}
        </h1>
        <button className="bg-blue-600 text-white px-2 sm:px-5 py-2 border-0 rounded font-semibold">
          View All
        </button>
      </div>
      <ProductCards />
    </div>
  );
}

export default ProductSection;
