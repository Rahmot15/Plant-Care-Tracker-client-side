import React from 'react';
import Hero from '../Components/Hero'
import MainContainer from '../Components/Container/MainContainer'
import PurchasePlant from '../Components/Container/PurchasePlant';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <PurchasePlant></PurchasePlant>
           <MainContainer></MainContainer>
        </div>
    );
};

export default Home;