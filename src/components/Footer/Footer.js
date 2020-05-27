import React from 'react';
import { footerLinks } from "./Content";
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      {
        footerLinks.map(link => {
          return (
            <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.alt} className="footer-icons" />
            </a>
          )
        })
      }
    </div>
  );
}

export default Footer;
