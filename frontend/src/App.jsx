import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';
// Import mock data
import topics from './mocks/topics';
import photos from './mocks/photos';
// Import helper function
import { toggleFav, switchModalOn, switchModalOff } from './helpers/photoHelpers';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Define state for fav button
  const [fav, setFav] = useState({});

  // Define the state for displaying the modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        fav={fav} // Pass fav state
        toggleFav={(photoId) => toggleFav(photoId, setFav)} // Pass toggle fav function
        switchModalOn={(photo) => switchModalOn(photo, setSelectedPhoto)} // pass switchModal function
      />
      {/* Click the picture to display modal */}
      {selectedPhoto !== null &&
        <PhotoDetailsModal
          photos={photos}
          selectedPhoto={selectedPhoto}
          switchModalOff={() => switchModalOff(setSelectedPhoto)}
          fav={fav} // Pass fav state
          toggleFav={(photoId) => toggleFav(photoId, setFav)} // Pass toggle fav function
          switchModalOn={(photo) => switchModalOn(photo, setSelectedPhoto)} // pass switchModal function 
        />}
    </div>
  );
};

export default App;
