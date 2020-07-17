import FULL_2DFINAL from '../../resources/images/illustrations/2dfinal.png';
import SMALL_2DFINAL from '../../resources/images/illustrations/2dfinal_small.png';

import FULL_NARRATIVE from '../../resources/images/illustrations/archnarrative.png';
import SMALL_NARRATIVE from '../../resources/images/illustrations/archnarrative_small.png';

import FULL_STILL from '../../resources/images/illustrations/stilllife.png';
import SMALL_STILL from '../../resources/images/illustrations/stilllife_small.png';

import FULL_SKETCH1 from '../../resources/images/illustrations/IMG_2516.png';
import SMALL_SKETCH1 from '../../resources/images/illustrations/IMG_2516_small.png';

import FULL_SKETCH2 from '../../resources/images/illustrations/IMG_2517.png';
import SMALL_SKETCH2 from '../../resources/images/illustrations/IMG_2517_small.png';

import FULL_SKETCH3 from '../../resources/images/illustrations/IMG_2518.png';
import SMALL_SKETCH3 from '../../resources/images/illustrations/IMG_2518_small.png';

import FULL_SKETCH4 from '../../resources/images/illustrations/IMG_2519.png';
import SMALL_SKETCH4 from '../../resources/images/illustrations/IMG_2519_small.png';

const ratio = 1;

const multiplyByRatio = (val) => {
  return val * ratio;
}

const Images = [
  {
    src: FULL_NARRATIVE,
    thumbnail: SMALL_NARRATIVE,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(270),
    caption: "Inventive Architecture (March 2020) - Drawing 2 Project"
  },
  {
    src: FULL_STILL,
    thumbnail: SMALL_STILL,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(270),
    caption: "Still Life (February 2020) - Drawing 2 Project"
  },
  {
    src: FULL_2DFINAL,
    thumbnail: SMALL_2DFINAL,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(742),
    caption: "Into the Hornet's Nest! (December 2019) - 2D Design Final Project"
  },
  {
    src: FULL_SKETCH4,
    thumbnail: SMALL_SKETCH4,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(710),
    caption: "The Sky is Falling! (December 2019) - Drawing 1 Project"
  },
  {
    src: FULL_SKETCH1,
    thumbnail: SMALL_SKETCH1,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(273),
    caption: "Hello Again! (May 2020) - Personal Work"
  },
  {
    src: FULL_SKETCH2,
    thumbnail: SMALL_SKETCH2,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(270),
    caption: "Penni Parker’s Room (May 2020) - Drawing 2 Final Project"
  },
  {
    src: FULL_SKETCH3,
    thumbnail: SMALL_SKETCH3,
    thumbnailWidth: multiplyByRatio(480),
    thumbnailHeight: multiplyByRatio(282),
    caption: "Inventive Interior (October 2019) - Drawing 1 Project"
  },
]

export {
  Images
};