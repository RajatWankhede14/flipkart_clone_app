import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Categories />
      <Banner />

      <ProductSection title="Deals of the Day" />
      <Footer />
    </div>
  );
}

export default HomeScreen;
