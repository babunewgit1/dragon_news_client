import moment from "moment";
import React from "react";
import {
  FaBookmark,
  FaShareAlt,
  FaRegEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CatagoryNews = ({ item }) => {
  const { author, title, thumbnail_url, details, rating, total_view, _id } =
    item;
  return (
    <div className="newsCatasingle border-2 rounded-md mb-8">
      <div className="scartheading flex items-center justify-between bg-[#F3F3F3] py-4 px-5">
        <div className="scartleft flex items-center gap-4">
          <div className="scartleftImages">
            <img
              className="w-11 h-11 rounded-full block"
              src={author?.img}
              alt=""
            />
          </div>
          <div className="scartRightpara">
            <h3>
              <strong>{author?.name}</strong>
            </h3>
            <p>{moment(author?.published_date).format("YYYY - MM - D")}</p>
          </div>
        </div>
        <div className="scartRight flex items-center gap-3">
          <span>
            <FaBookmark></FaBookmark>
          </span>
          <span>
            <FaShareAlt></FaShareAlt>
          </span>
        </div>
      </div>
      <div className="newsTitle p-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="newsThum p-4 pt-0">
        <img
          className="block w-full h-[350px] object-cover object-top rounded-3xl"
          src={thumbnail_url}
          alt=""
        />
      </div>
      <div className="newsDiscript p-4">
        {details.length > 250 ? (
          <>
            <p>{details.slice(0, 250)}.....</p>
            <Link
              className="font-semibold text-orange-500 mt-4 inline-block"
              to={`/news/${_id}`}
            >
              Read More
            </Link>
          </>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className="scartfooter flex items-center justify-between p-4 border-t-2">
        <div className="scartfooter-left flex items-center gap-3">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating?.number) || 0}
            readOnly
          />
          <span>
            <strong>{rating?.number}</strong>
          </span>
        </div>
        <div className="sfooterRight flex items-center gap-2">
          <FaRegEye className="w-5 h-5"></FaRegEye> {total_view}
        </div>
      </div>
    </div>
  );
};

export default CatagoryNews;
