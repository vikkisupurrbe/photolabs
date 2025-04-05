import React, { useState }  from 'react';
import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
// Import mock data
import topics from './mocks/topics';
import photos from './mocks/photos';
// Import helper function
import { toggleFav } from './helpers/photoHelpers';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Define state for fav button
  const [fav, setFav] = useState({});

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        fav={fav} // Pass fav state
        toggleFav={(photoId) => toggleFav(photoId, setFav)} // Pass toggle fav function
      />
      <PhotoDetailsModal />
    </div>
  );
};

export default App;
