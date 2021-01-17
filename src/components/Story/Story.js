import React from 'react';
import "./Story.css";
import { importStoryboards } from './Content';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import shStart from './sh_start.PNG';
import shEnd from './sh_end.PNG';

const Story = () => {
  const storyboards = importStoryboards();

  return (
    <div id="story">
      <img className="storyboard-banner" alt={"Patricia Deogracias Story Portfolio 2021"} src={shStart} />
      {storyboards.map((storyboard, storyIndex) =>
        <div key={"storyboard".concat(storyIndex)} className="storyboard">
          <h2 className="storyboard-title">{storyboard.text.title}</h2>
          <p className="storyboard-subtitle">{storyboard.text.description}</p>
          <Carousel showIndicators={false} showThumbs={false} transitionTime={0} useKeyboardArrows>
            {storyboard.images.map((image, imageIndex) =>
              <div key={storyboard.text.title.concat("image").concat(imageIndex)}>
                <img alt={"storyboard image ".concat(imageIndex)} src={image} />
              </div>
            )}
          </Carousel>
          {
            storyboard.designs.map((design, designIndex) =>
              <img
                className="storyboard-design"
                alt={"storyboard-design for ".concat(storyboard.text.title)}
                key={storyboard.text.title.concat("design").concat(designIndex)}
                src={design}
              />
            )
          }
        </div>
      )}
      <img className="storyboard-banner" alt="Thank you for looking at my storyboard" src={shEnd} />
    </div>
  );
}

export default Story;
