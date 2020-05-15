import React from 'react';
import "./LandingPage.css"
import avatar from "../../resources/images/placeholder-avatar.png"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="menu">
        <img id="menu-avatar" src={avatar} alt="Avatar"/>
        <a className="menu-title">Patricia Deogracias</a>
        <span className="menu-options">
          <a href="#">Illustrations</a>
          <a href="#">Computer Animation</a>
          <a href="#">About Me</a>
        </span>  
      </div>
    </div>
  );
}

export default LandingPage;
