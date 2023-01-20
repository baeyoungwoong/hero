import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="header">
        <ul className="nav">
          <li className="nav_name">
            <Link to="BYW Portfolio" className="link">
              <h1>BYW Portfolio</h1>
            </Link>
          </li>
          <li>
            <Link to="Aboutme" className="link">
              About me
            </Link>
          </li>
          <li>
            <Link to="Skills" className="link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="Archiving" className="link">
              Archiving
            </Link>
          </li>
          <li>
            <Link to="Projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="Contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
export default App;
