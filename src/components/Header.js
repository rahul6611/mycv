import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const [isShow, setIsShow] = useState(false);
  let location = useLocation();

  const handleSiderbar = () => {
    setTimeout(() => {
        setIsShow(false)
    }, 300);

  } 

  return (
    <>
      <header className={isShow ? 'toggle' : ""}>
        <div className="user">
          <img
            src={require("../img/wi36iFIc_400x400.jpg")}
            alt="Profile Photo"
          />
          <h3 className="name">Rahul H. Vekariya</h3>
          <p className="post">Web Developer</p>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link onClick={handleSiderbar} className={location.pathname === "/" ? 'active' : ""} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={handleSiderbar}  className={location.pathname === "/about" ? 'active' : ""} to="/about">About</Link>
            </li>
            <li>
              <Link onClick={handleSiderbar} className={location.pathname === "/education" ? 'active' : ""} to="/education">Education</Link>
            </li>
            <li>
              <Link onClick={handleSiderbar} className={location.pathname === "/contact" ? 'active' : ""} to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="menu" onClick={() => setIsShow(!isShow)} className={`fa fa-bars ${isShow ? 'fa-times' : ""}`}></div>
    </>
  );
}

export default Header;
