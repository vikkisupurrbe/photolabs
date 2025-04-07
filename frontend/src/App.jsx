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
        fav={state.fav} // Pass fav state
        updateToFavPhotoIds={updateToFavPhotoIds} // Pass toggle fav function
        setPhotoSelected={setPhotoSelected} // Select a photo to open modal
        setTopicSelected={setTopicSelected} // Display photos based on selected topic
      />
      {/* Click the picture to display modal */}
      {state.selectedPhoto !== null &&
        <PhotoDetailsModal
          photos={state.photoData}
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
