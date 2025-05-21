import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <div className="bg-gray-900/50 backdrop:backdrop-blur-3xl shadow-sm sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
