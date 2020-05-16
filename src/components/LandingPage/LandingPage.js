import React from 'react';
import "./LandingPage.css";
import "@material/layout-grid/mdc-layout-grid.scss";
import AnimationImg from "../../resources/images/landing-animation.gif";
import IGLogo from "../../resources/images/ig-logo.svg";
import LinkedInLogo from "../../resources/images/linkedin-logo.svg";
import TwitterLogo from "../../resources/images/twitter-logo.svg";

const LandingPage = () => {
  return (
    <div id="landing-page" className="mdc-layout-grid mdc-layout-grid__inner">
      <div id="landing-page-desc" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
        <h1 id="landing-page-title">Animations</h1>
        <p id="landing-page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img className="landing-page-social-media-icons" src={IGLogo} alt="Instagram"/>
        <img className="landing-page-social-media-icons" src={LinkedInLogo} alt="LinkedIn"/>
        <img className="landing-page-social-media-icons" src={TwitterLogo} alt="Twitter"/>
      </div>
      <div id="landing-page-images" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
        <img id="animationImg" src={AnimationImg} alt="Animation Sample"/>
      </div>
    </div>
  );
}

export default LandingPage;
