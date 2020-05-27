import React from 'react';
import "./Navbar.css";
import "./Hamburger.css";
import avatar from './../../resources/images/avatar.jpg';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Footer from './../Footer/Footer';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="sidenav">
        <img id="avatar" src={avatar} alt="Patricia" />
        <h1 id="sidenav-title">Patricia Deogracias</h1>
        <Link className="sidenav-link-selected" to="/illustrations">Illustrations</Link>
        <Link to="/animations">Animations</Link>
        <Link to="/about">About Me</Link>
      </div>
      <Menu className="navbar-hamburger" right noOverlay>
        <Link className="navbar-hamburger-link" to="/illustrations">Illustrations</Link>
        <Link className="navbar-hamburger-link" to="/animations">Animations</Link>
        <Link className="navbar-hamburger-link" to="/about">About Me</Link>
      </Menu>
    </div>
  );
}

export default Navbar;
