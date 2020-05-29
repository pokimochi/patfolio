import React, { useState } from 'react';
import "./Navbar.css";
import avatar from './../../resources/images/avatar.jpg';
import Twitter from './../../resources/images/footer/twitter.svg';
import LinkedIn from './../../resources/images/footer/linkedin.svg';
import Instagram from './../../resources/images/footer/instagram.svg';

import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClicked = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const selected = {
    color: "#840032",
    textDecoration: "underline",
    outlineColor: "#840032"
  };
  const active = {
    display: "block",
  };

  return (
    <div id="navbar">
      <div id="navbar-header">
        <div id="navbar-header-left">
          <img id="navbar-header-avatar" src={avatar} alt="Patricia" />
          <span id="navbar-header-title">Patricia Deogracias</span>
        </div> 
        <div id="navbar-header-hamburger">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleBurgerClicked}
            width={25}
            height={20}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
      <div id="navbar-links" style={isOpen ? active : {}}>
        <Link onClick={handleBurgerClicked} style={location.pathname === "/illustrations" ? selected : {}} to="/illustrations">Illustrations</Link>
        <Link onClick={handleBurgerClicked} style={location.pathname === "/animations" ? selected : {}} to="/animations">Animations</Link>
        <Link onClick={handleBurgerClicked} style={location.pathname === "/about" ? selected : {}} to="/about">About Me</Link>
      </div>
      <div id="footer" style={isOpen ? active : {}}>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fastestpeanut">  
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/patricia-alyson-deogracias-81a608192/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/pan.de.monay/">
              <img src={Instagram} alt="Instagram" />
          </a>
        </div>
    </div>
  );
}

export default Navbar;
