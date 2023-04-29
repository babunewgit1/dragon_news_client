import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Editor = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-babuhp80-gmailcom.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const sliceNews = news.slice(0, 3);

  return (
    <div className="editor grid grid-cols-3 gap-4">
      {sliceNews.map((news) => {
        return (
          <div key={news._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={news?.image_url} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p className="flex items-center gap-3">
                <FaCalendarAlt></FaCalendarAlt>{" "}
                {moment(news?.author?.published_date).format("MMM D YYYY")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
