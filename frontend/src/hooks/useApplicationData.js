import { useReducer } from "react";

// Initial state of the app
const initialState = {
  fav: {}, // Favorite photo IDs
  selectedPhoto: null, // Currently selected photo (for modal)
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAV":
      return {
        ...state,
        fav: {
          ...state.fav,
          [action.photoId]: !state.fav[action.photoId]
        }
      };
    case "SELECT_PHOTO":
      return {
        ...state,
        selectedPhoto: action.photo
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        selectedPhoto: null
      };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action: update favorite photo
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "TOGGLE_FAV", photoId });
  };

  // Action: select a photo to open modal
  const setPhotoSelected = (photo) => {
    dispatch({ type: "SELECT_PHOTO", photo });
  };

  // Action: close the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    state, // Contains fav and selectedPhoto states
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;