import React from 'react';
import ReactPlayer from 'react-player';
import './ResponsivePlayer.css'

const ResponsivePlayer = (props) => {
  return (
    <div className="player-wrapper">
      <h1 className="player-title">{props.title}</h1>
      <ReactPlayer style={{maxWidth: "80vw", maxHeight: "50vh"}} className='player' url={props.url} controls />
      <h3 className="player-subtitle">{props.subtitle}</h3>
    </div>
  );
}

export default ResponsivePlayer;