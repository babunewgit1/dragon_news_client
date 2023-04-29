import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import CatagoryNews from "../CatagoryNews/CatagoryNews";
import { MyContext } from "../../../AuthProvidor/AuthProvidor";

const Home = () => {
  const news = useLoaderData();
  const { user } = useContext(MyContext);
  console.log(user);
  return (
    <div className="homeNews">
      {news.map((item) => (
        <CatagoryNews item={item} key={item._id}></CatagoryNews>
      ))}
    </div>
  );
};

export default Home;
