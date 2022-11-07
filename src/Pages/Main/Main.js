import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Public/Footer";
import Nave from "../../Public/Nave";

const Main = () => {
  return (
    <>
      <Nave></Nave>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
