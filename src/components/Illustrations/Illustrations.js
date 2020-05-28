import React from 'react';
import "./Illustrations.css";
import Gallery from 'react-grid-gallery';
import { Images } from './Content';

const Illustrations = () => {
  return (
    <div id="illustrations">
      <Gallery rowHeight={220 } images={Images} showLightboxThumbnails enableImageSelection={false} backdropClosesModal />
    </div>
  );
}

export default Illustrations;
