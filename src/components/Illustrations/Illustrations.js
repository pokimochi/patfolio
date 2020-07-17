import React from 'react';
import "./Illustrations.css";
import Gallery from 'react-grid-gallery';
import { Images } from './Content';

const Illustrations = () => {
  return (
    <div id="illustrations">
      <Gallery
        images={Images}
        showLightboxThumbnails
        enableImageSelection={false}
        backdropClosesModal
        rowHeight={250}
        margin={5}
      />
    </div>
  );
}

export default Illustrations;
