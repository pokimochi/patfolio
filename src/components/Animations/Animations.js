import React from 'react';
import "./Animations.css";
import ReactPlayer from 'react-player';

const Animations = () => {
  return (
    <div id="animations">
      <h1 id="animations-title">Animation Reel</h1>
      <ReactPlayer className="player" width="60%" height="80%" url='https://youtu.be/Zys4yKF3i2w' controls />
      <h3 id="animations-subtitle">Demo reel featuring work up to May 2020</h3>
    </div>
  );
}

export default Animations;
