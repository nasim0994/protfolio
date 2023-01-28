import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
