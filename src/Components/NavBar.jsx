import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="logo">unsplash</li>
        <li className="menu">
          <i className="fa fa-bars"></i>
        </li>
        <li className="collection">collection</li>
        <li className="explore">explore</li>
        <li className="search">search</li>
      </ul>
    </nav>
  );
};

export default NavBar;
