// Toggle Fav for a photo 
export const toggleFav = (photoId, setFav) => {
  setFav(prevFav => ({
    // Create a copy of the existing state
    ...prevFav,
    // Toggle Fav for a specific photo
    [photoId]: !prevFav[photoId]
  }));
};

// Display one modal for a specific at a time
export const switchModalOn = (photo, setSelectedPhoto) => {
  setSelectedPhoto(photo);
};

// Close the modal
export const switchModalOff = (setSelectedPhoto) => {
  setSelectedPhoto(null);
};