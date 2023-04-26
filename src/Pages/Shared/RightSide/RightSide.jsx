import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="rightSidebar">
      <div className="rightLogin">
        <h3 className="text-xl font-bold">Login With</h3>
        <ul>
          <li className="mt-4">
            <button className="btn btn-outline w-full flex items-center gap-3">
              <FaGoogle></FaGoogle>
              Login with Google
            </button>
          </li>
          <li className="mt-4">
            <button className="btn btn-outline w-full flex items-center gap-3">
              <FaGithub></FaGithub>
              Login with Github
            </button>
          </li>
        </ul>
      </div>
      <div className="find mt-10">
        <h3 className="text-xl font-bold mb-5">Find Us On</h3>
        <ul>
          <li className="border px-4 py-3">
            <a className="flex gap-3 items-center" href="#">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200">
                <FaFacebook className="h-4 w-4"></FaFacebook>
              </span>
              Facebook
            </a>
          </li>
          <li className="border px-4 py-3">
            <a className="flex gap-3 items-center" href="#">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200">
                <FaInstagram className="h-4 w-4"></FaInstagram>
              </span>
              Instagram
            </a>
          </li>
          <li className="border px-4 py-3">
            <a className="flex gap-3 items-center" href="#">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200">
                <FaTwitch className="h-4 w-4"></FaTwitch>
              </span>
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="q_zone">
        <Qzone></Qzone>
      </div>
      <div className="Qtext text-white py-16 px-14 text-center mt-5">
        <h3 className="text-3xl font-bold leading-[1.8]">
          Create an Amazing Newspaper
        </h3>
        <p className="mt-6">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Link
          className="text-white bg-red-500 px-12 py-4 inline-block mt-5"
          to="/learn"
        >
          <strong>Learn More</strong>
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
