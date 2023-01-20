import React from "react";
import "./Archiving.css";
import Arc1 from "../img/github.png";

function Archiving() {
  return (
    <div className="Archiving_main">
      <div className="Archiving_L"></div>
      <div className="Archiving_R">
        <div className="Archiving_R_main">
          <div className="Archiving_R1">Archiving</div>
          <div className="Archiving_R2">
            <img className="Archiving_img1" src={Arc1} alt="github" />
            <a href="https://github.com/baeyoungwoong" target="black">
              github.com/baeyoungwoong
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Archiving;
