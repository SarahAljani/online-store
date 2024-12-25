import React from "react";
import "../assests/homeStyles/Home.css";
import "../index.css";
import LandingSection from "../Components/home/LandingSection/LandingSection";
import ProductsCards from "../Components/home/ProductsCards";
const Home = () => {
  return (
    <div className="home">
      <LandingSection />
      <ProductsCards />
    </div>
  )
};

export default Home;
