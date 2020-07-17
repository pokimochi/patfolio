import React from 'react';
import "./About.css"
import headshot from "../../resources/images/about/headshot.png";

const About = () => {
  return (
    <div id="about">
      <img id="headshot" src={headshot} alt="Patricia Deogracias" />
      <h1>Hi, call me Pat!</h1>
      <p>
        I'm Patricia Alyson T. Deogracias (or Pat for short), and I am a student in <b>Computer Animation at Ringling College of Art and Design</b>. 
        <br />
        <br />
        My focus is on <b>illustration, animation, and visual development</b>! I am especially passionate about representation in media, and creating art that explores the idea of home, and identity.
        Aside from drawing, I love mornings, random animal facts, horror!
        <br />
        <br />
        Feel free to reach out to my <a id="email-link" href="mailto: patriciatdeo@gmail.com">e-mail</a>, or social media!
        <br />
        <br />
        <b>patriciatdeo@gmail.com</b>
      </p>
    </div>
  );
}

export default About;
