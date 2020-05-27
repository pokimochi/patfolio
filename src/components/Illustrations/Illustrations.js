import React from 'react';
import "./Illustrations.css";
import Gallery from 'react-grid-gallery';
import { Images } from './Content';

const Illustrations = () => {
  return (
    <div id="illustrations">
      <Gallery margin={5} rowHeight={300} images={Images} showLightboxThumbnails enableImageSelection={false} backdropClosesModal />
    </div>
  );
}

export default Illustrations;
