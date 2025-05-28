import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import NotfoundLottie from '../../src/Lotie/error404.json'

const NotFound = () => {
  return (
    <div>
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://i.ibb.co/p6L4kF3W/0eec91f7-f961-4f7c-a1fe-bac53dd90f57.png")',
          }}
        ></div>
        <div className="absolute  bg-black opacity-40 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen ">
          <Lottie animationData={NotfoundLottie} loop={true}></Lottie>
            <h1 className="md:text-6xl text-3xl font-bold text-red-500  mb-5">PAGE NOT FUND</h1>
          <Link to={"/"}>
            <button className="inline-flex  items-center justify-center rounded-lg bg-green-600 md:py-4 py-3 md:px-10 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              GO BACK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
