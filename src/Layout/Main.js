import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
