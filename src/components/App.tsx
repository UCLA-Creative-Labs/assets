import React from 'react';
import Gallery from 'react-grid-gallery';
import IMAGES from '../assets/images.json';
import './styles/App.scss';

function App(): JSX.Element {
  return(
    <div>
      <h1 className="text">Creative Labs Assets</h1>
      <Gallery images={IMAGES}/>
    </div>
  );
}

export default App;