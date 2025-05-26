import React from "react";
import Hero from "../Components/Hero";
import PurchasePlant from "../Components/Container/PurchasePlant";
import PlantsStyle from "../Components/PlantsStyle";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <PurchasePlant></PurchasePlant>
      <PlantsStyle></PlantsStyle>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
