import React from 'react';
import "./Animations.css";
import ReactPlayer from 'react-player';

const Animations = () => {
  return (
    <div id="animations">
      <h1>Animation Reel</h1>
      <ReactPlayer className="player" width="70%" height="60%" url='https://youtu.be/Zys4yKF3i2w' controls />
      <h3 className="animations-title">Demo reel featuring work up to May 2020</h3>
    </div>
  );
}

export default Animations;
