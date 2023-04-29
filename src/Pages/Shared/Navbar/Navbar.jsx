import React from "react";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../../../AuthProvidor/AuthProvidor";
import { useState } from "react";

const Navbar = () => {
  const { user, logOutUser } = useContext(MyContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const logOutHandeler = () => {
    setSuccess("");
    setError("");
    logOutUser()
      .then(() => {
        setSuccess("LogOut Successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="myContainer py-5">
      <p className="text-red-600 font-bold my-4">{error}</p>
      <p className="text-green-500 font-bold my-4">{success}</p>
      <div className="navbars">
        <div className="navbarWrapper grid grid-cols-12">
          <div className="navLeft col-span-4"></div>
          <div className="navMenu col-span-4">
            <ul className="flex items-center justify-center gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div className="login col-span-4 flex items-center justify-end gap-4">
            <FaUserCircle className="h-8 w-8" />
            {user ? (
              <button
                onClick={logOutHandeler}
                className="font-medium text-white bg-black py-2 px-7"
              >
                Logout
              </button>
            ) : (
              <button className="font-medium text-white bg-black py-2 px-7">
                <Link to="/form/login">LogIn</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
