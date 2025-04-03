import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Sample data
const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Create an array of 3 photo objects
  const photos = new Array(3).fill(sampleDataForPhotoListItem);

  // Map the array to generate components
  const PhotoListItems = photos.map((photo, index) => (
    <PhotoListItem key={index} photo={photo} />
  ))

  return (
    <div className="App">
      {PhotoListItems}
    </div>
  );
};

export default App;
