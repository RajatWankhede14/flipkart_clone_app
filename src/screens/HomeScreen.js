import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Banner from "../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Categories />
      <Banner />
    </div>
  );
}

export default HomeScreen;
