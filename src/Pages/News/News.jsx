import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
  const [catanews, setCatanews] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-babuhp80-gmailcom.vercel.app/catagory")
      .then((res) => res.json())
      .then((data) => setCatanews(data));
  }, []);

  const idNews = useLoaderData();
  const { image_url, title, details, category_id } = idNews;

  const cataName = catanews.find((n) => n.id === category_id);

  return (
    <>
      <div className="newsCataname text-2xl font-bold py-5">
        {cataName?.name}
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions mt-8">
            <Link
              className="flex items-center bg-[#D72050] text-white px-7 py-3 gap-4"
              to={`/catagory/${category_id}`}
            >
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
