import React from "react";
import "./Skills.css";
import img from "../img/html.png";
import img1 from "../img/css.png";
import img2 from "../img/js.png";
import img3 from "../img/amazon.png";
import img4 from "../img/figma.png";
import img5 from "../img/github.png";
function Skills() {
  return (
    <div className="skillsMain">
      <div className="leftt"></div>
      <div className="rightt">
        <div className="rightt1">
          <div className="skill1">
            <span>passive</span>
          </div>
          <div className="skillshow">
            <img className="skillimg" src={img} alt="html" />
            <img className="skillimg1" src={img1} alt="css" />
          </div>
        </div>
        <div className="rightt2">
          <div className="skill2">
            <span>active</span>
          </div>
          <div className="skillshow1">
            <img className="skillimg2" src={img2} alt="js" />
            <img className="skillimg3" src={img3} alt="amazon" />
            <img className="skillimg4" src={img4} alt="figma" />
            <img className="skillimg5" src={img5} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
