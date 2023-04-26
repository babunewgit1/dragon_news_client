import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";
import RightSide from "../Pages/Shared/RightSide/RightSide";

const Main = () => {
  return (
    <div className="main">
      <Header></Header>
      <div className="mainContent">
        <div className="myContainer">
          <div className="mainContent-wrapper grid grid-cols-12">
            <div className="leftSide col-span-3">
              <LeftSide></LeftSide>
            </div>
            <div className="middleContent col-span-6">
              <p>Comming Soon</p>
            </div>
            <div className="rightSide col-span-3">
              <RightSide></RightSide>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
