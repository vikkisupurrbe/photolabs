import { useReducer, useEffect } from "react";

// Initial state of the app
const initialState = {
  fav: {}, // Favorite photo IDs
  selectedPhoto: null, // Currently selected photo (for modal)
  photoData: [],
  topicData: []
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
    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload
      };
    case "SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.payload
      };

    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo data
  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
      .catch(error => console.error('Error fetching photo data:', error));
  }, []);

  // Fetch topic data
  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", payload: data }))
      .catch(error => console.error('Error fetching topic data:', error));
  }, []);

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

  // Action: set current topic
  const setTopicSelected = (topicId) => {
    const url = topicId
      ? `/api/topics/${topicId}/photos`
      : `/api/photos`; // Default photos

    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
      .catch(error => console.error('Error fetching topic photos:', error));
  }

  return {
    state, // Contains fav and selectedPhoto states
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setTopicSelected
  };
};

export default useApplicationData;