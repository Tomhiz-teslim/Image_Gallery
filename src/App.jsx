import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { slides } from './data';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';``
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from './assets/images';

function App() {
  const [index, setIndex] = useState(-1); 

  return (
    <>
    <h1>GALLERY IMAGE</h1>
      <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        pluginOptions={{
          captions: {
            showToggle: true,
            descriptionTextAlign: 'end',
          },
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;
