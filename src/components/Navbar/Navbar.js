import React from 'react';
import "./Navbar.css";
import "./Hamburger.css"
import avatar from "../../resources/images/placeholder-avatar.png";
import { slide as Menu } from 'react-burger-menu';

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
      <Menu className="navbar-hamburger" right noOverlay>
        <a className="navbar-hamburger-link" href="#">Illustrations</a>
        <a className="navbar-hamburger-link" href="#">Animations</a>
        <a className="navbar-hamburger-link" href="#">About Me</a>
      </Menu>
    </header>
  );
}

export default Navbar;
