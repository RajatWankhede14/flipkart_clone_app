import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Categories />
      <Banner />

      <ProductSection title="Deals of the Day" />
    </div>
  );
}

export default HomeScreen;
