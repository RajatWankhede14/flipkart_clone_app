import React from "react";

function CategoryCard({ image, categoryName }) {
  return (
    <div className="px-3 py-8 sm:px-10">
      <img
        src={image}
        alt={categoryName}
        className="h-5 w-5 sm:h-16 sm:w-16 mx-auto"
      />
      <h2 className="text-xs sm:text-base text-center py-2 font-semibold hover:text-blue-700 cursor-pointer">
        {categoryName}
      </h2>
    </div>
  );
}

export default CategoryCard;
