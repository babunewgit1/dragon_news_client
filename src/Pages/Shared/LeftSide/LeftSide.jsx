import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagory")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  return (
    <div className="leftSidebar">
      <h3 className="text-xl font-bold mb-5">All Caterogy</h3>
      <div className="catalist">
        <ul>
          {catagory.map((catagory) => {
            return (
              <li className="pl-9 py-4" key={catagory.id}>
                <Link to={`/catagory/${catagory.id}`}> {catagory.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
