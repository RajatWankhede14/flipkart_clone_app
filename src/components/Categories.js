import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/440c0811120309ca.png?q=100",
      name: "Mobiles",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/6405362ab0aaa3d5.png?q=100",
      name: "Fashion",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/38773f7201f9b9be.png?q=100",
      name: "Electronics",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/69d3da6eb3f00514.png?q=100",
      name: "Home",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/5106ad42292a883d.png?q=100",
      name: "Travel",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/39c66f9cc1d82569.png?q=100",
      name: "Appliances",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100",
      name: "Furniture",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/bd1572c1e4cadd2b.png?q=100",
      name: "Beauty, Toys & more",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/798ca135a6c13d97.png?q=100",
      name: "Grocery",
    },
  ];
  return (
    <div className="categories flex justify-around pt-16 overflow-x-scroll shadow-lg">
      {categories.map((category) => (
        <CategoryCard image={category.image} categoryName={category.name} />
      ))}
    </div>
  );
}

export default Categories;
