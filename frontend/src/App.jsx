import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';
// Import mock data
import topics from './mocks/topics';
import photos from './mocks/photos';
// Import helper function
import { toggleFav, switchModalOn } from './helpers/photoHelpers';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Define state for fav button
  const [fav, setFav] = useState({});

  // Define the state for displaying the model
  const [displayModal, setDisplayModal] = useState(null);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        fav={fav} // Pass fav state
        toggleFav={(photoId) => toggleFav(photoId, setFav)} // Pass toggle fav function
        displayModal={displayModal} // Pass modal state
        switchModalOn={(photoId) => switchModalOn(photoId, setDisplayModal)} // pass switchModal function
      />
      {/* Click the picture to display modal */}
      {displayModal !== null && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
