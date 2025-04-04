// Toggle Fav for a photo 
export const toggleFav = (photoId, setFav) => {
  setFav(prevFav => ({
    // Create a copy of the existing state
    ...prevFav,
    // Toggle Fav for a specific photo
    [photoId]: !prevFav[photoId]
  }));
};