import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CatagoryNews from "../CatagoryNews/CatagoryNews";

const Catagory = () => {
  //   const { id } = useParams();
  const news = useLoaderData();
  return (
    <div className="catagorynews">
      {news.map((item) => (
        <CatagoryNews item={item} key={item._id}></CatagoryNews>
      ))}
    </div>
  );
};

export default Catagory;
