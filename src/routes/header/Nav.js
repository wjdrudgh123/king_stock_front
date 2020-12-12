import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const handleToggleEvt = () => {
  const toggler = document.querySelector(".menu-toggler");
  const navMenu = document.querySelector(".navbar-menu");
  if (!toggler.classList.contains("active")) {
    toggler.classList.add("active");
    navMenu.classList.add("active");
  } else {
    toggler.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

const handleNavClick = () => {
  const toggler = document.querySelector(".menu-toggler");
  const navMenu = document.querySelector(".navbar-menu");
  toggler.classList.remove("active");
  navMenu.classList.remove("active");
};

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="inner-width">
        <a href="/" className="logo">
          <i className="fas fa-home"></i>
        </a>
        <button className="menu-toggler" onClick={handleToggleEvt}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-menu">
          <Link to="/" onClick={handleNavClick}>
            Home
          </Link>
          {/* <Link to="/rss" onClick={handleNavClick}>
            경제뉴스
          </Link>
          <Link to="/sche" onClick={handleNavClick}>
            증시스케쥴
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
