import React from "react";
import Hero from "../Components/Hero";
import PurchasePlant from "../Components/Container/PurchasePlant";
import PlantsStyle from "../Components/PlantsStyle";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <PurchasePlant></PurchasePlant>
      <PlantsStyle></PlantsStyle>
    </div>
  );
};

export default Home;
