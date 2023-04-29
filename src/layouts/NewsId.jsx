import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import RightSide from "../Pages/Shared/RightSide/RightSide";
import Editor from "../Pages/News/Editor/Editor";

const NewsId = () => {
  return (
    <div className="newsLayout">
      <div className="myContainer">
        <Header></Header>
        <div className="newslayoutWrapper grid grid-cols-12 gap-7">
          <div className="newsMain col-span-9">
            <Outlet></Outlet>
            <div className="edtior mt-8">
              <h3 className="text-2xl font-semibold mb-5">Editors Insight</h3>
              <Editor></Editor>
            </div>
          </div>
          <div className="newRightsidebar col-span-3">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsId;
