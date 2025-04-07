// Import built-ins and components
import React from 'react';
import HomeRoute from './routes/HomeRoute'
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import './App.scss';

// Import custom hook
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, setTopicSelected } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        fav={state.fav} // Favorite photo IDs
        updateToFavPhotoIds={updateToFavPhotoIds} // Function to toggle favorite status
        setPhotoSelected={setPhotoSelected} // Select a photo and open modal
        setTopicSelected={setTopicSelected} // Display photos based on selected topic
      />
      {/* Click the picture to display modal */}
      {state.selectedPhoto !== null &&
        <PhotoDetailsModal
          photos={state.photoData}
          selectedPhoto={state.selectedPhoto}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          fav={state.fav}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
        />}
    </div>
  );
};

export default App;
