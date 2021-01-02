import React from 'react';
import "./Animations.css";
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer.js';

const Animations = () => {
  return (
    <div id="animations">
      <ResponsivePlayer
        url="https://youtu.be/Zys4yKF3i2w"
        title="2D Animation Reel"
        subtitle="Demo reel featuring work up to May 2020"
      />
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=D_pf8N5zhGs&feature=youtu.be"
        title="3D Animation Reel 2020"
      />
    </div>
  );
}

export default Animations;
