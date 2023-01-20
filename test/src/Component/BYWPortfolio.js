import React from "react";
import { Link } from "react-router-dom";
import "./BYWportfolio.css";
function BYWPortfolio() {
  return (
    <div className="div0">
      <div className="div1">
        - 배영웅 -<br></br>포트폴리오
        <hr className="hr" />
      </div>
      <div className="div2">
        안녕하세요 <br></br>
        공부를 밥 먹듯이 하는 저의 노하우를 소개하겠습니다.
      </div>
      <Link className="but" type="button" to="/Aboutme">
        노하우 알아보기↓
      </Link>
    </div>
  );
}
export default BYWPortfolio;
