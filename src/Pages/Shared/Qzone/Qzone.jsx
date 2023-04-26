import React from "react";
import q1 from "../../../assets/q1.png";
import q2 from "../../../assets/q2.png";
import q3 from "../../../assets/q3.png";

const Qzone = () => {
  return (
    <div className="qzone bg-slate-100 p-6 mt-7">
      <h3 className="text-xl font-bold mb-5">Q-Zone</h3>
      <div className="qzoneImg">
        <div className="qzoneImgOne">
          <img className="block w-full" src={q1} alt="images not founds" />
        </div>
        <div className="qzoneImgOne">
          <img className="block w-full" src={q2} alt="images not founds" />
        </div>
        <div className="qzoneImgOne">
          <img className="block w-full" src={q3} alt="images not founds" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
