import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Categories />
    </div>
  );
}

export default HomeScreen;
