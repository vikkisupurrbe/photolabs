// Import built-ins and components
import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';
// Import mock data
import topics from './mocks/topics';
import photos from './mocks/photos';
// Import custom hook
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        fav={state.fav} // Pass fav state
        updateToFavPhotoIds={updateToFavPhotoIds} // Pass toggle fav function
        setPhotoSelected={setPhotoSelected} // Select a photo to open modal
      />
      {/* Click the picture to display modal */}
      {state.selectedPhoto !== null &&
        <PhotoDetailsModal
          photos={photos}
          selectedPhoto={state.selectedPhoto}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          fav={state.fav} // Pass fav state
          updateToFavPhotoIds={updateToFavPhotoIds} // Pass toggle fav function
          setPhotoSelected={setPhotoSelected} // Select a photo to open modal
        />}
    </div>
  );
};

export default App;
