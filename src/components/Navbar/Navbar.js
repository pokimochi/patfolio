import React from 'react';
import "./Navbar.css"
import avatar from "../../resources/images/placeholder-avatar.png"

const Navbar = () => {
  return (
    <header id="navbar">
      <div id="navbar-home">
        <img id="navbar-home-avatar" src={avatar} alt="Avatar"/>
        <a id="navbar-home-title">Patricia Deogracias</a>
      </div>
      <div id="navbar-options">
        <a className="navbar-options-link" href="#">Illustrations</a>
        <a className="navbar-options-link" href="#">Animations</a>
        <a className="navbar-options-link" href="#">About Me</a>
      </div>
    </header>
  );
}

export default Navbar;
