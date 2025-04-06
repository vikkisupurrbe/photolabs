import { useState } from "react";
import { toggleFav, switchModalOn, switchModalOff } from "../helpers/photoHelpers";

const useApplicationData = () => {
  // Define state for fav button
  const [fav, setFav] = useState({});

  // Define the state for selected photo (for modal)
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Action: update favorite photo
  const updateToFavPhotoIds = (photoId) => {
    toggleFav(photoId, setFav);
  };

  // Action: select a photo to open modal
  const setPhotoSelected = (photo) => {
    switchModalOn(photo, setSelectedPhoto);
  };

  // Action: close the modal
  const onClosePhotoDetailsModal = () => {
    switchModalOff(setSelectedPhoto);
  };

  // State object to return
  const state = {
    fav,
    selectedPhoto
  };

  return {
    state, // Contains fav and selectedPhoto states
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;