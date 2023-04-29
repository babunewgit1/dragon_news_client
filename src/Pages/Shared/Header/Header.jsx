import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import moment from "moment";

const Header = () => {
  return (
    <div className="header py-12">
      <div className="myContainer">
        <div className="headerWrapper text-center">
          <div className="logo">
            <Link to="/">
              <img className="inline-block" src={logo} alt="logo" />
            </Link>
            <p className="py-4">Journalism Without Fear or Favour</p>
          </div>
          <div className="data">{moment().format("dddd, MMMM D, YYYY")}</div>
          <div className="latestNews flex bg-[#F3F3F3] p-2 my-6">
            <span className="text-white bg-secondary px-8 py-3 mr-3">
              <strong>Latest</strong>
            </span>
            <Marquee pauseOnHover={true} className="cursor-pointer">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                inventore quo necessitatibus mollitia dolores. Voluptas vel aut
                consequatur doloremque officiis iure excepturi, illo ipsa
                consectetur, eos reprehenderit quibusdam nam? Fugiat nesciunt,
                earum obcaecati praesentium quia quos aliquam. Distinctio enim,
                ipsam impedit saepe necessitatibus animi cupiditate omnis
                quibusdam quod, soluta sapiente odit quaerat asperiores eligendi
                sit porro ab et placeat doloribus incidunt? Quasi doloribus et,
                deleniti asperiores enim sunt fuga. Quia inventore obcaecati
                odit. Ipsa adipisci, delectus molestiae autem possimus quae,
                alias rem et accusamus, molestias temporibus at eius tenetur!
                Temporibus ipsam est repellendus quo non id mollitia fugit
                impedit iusto.
              </strong>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
