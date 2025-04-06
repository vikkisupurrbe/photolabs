import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { switchModalOff, selectedPhoto, fav, toggleFav, switchModalOn } = props;
  console.log(props);

  // For each selected photo, show its similar photos

  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  // Handle click function
  const handleClick = () => {
    switchModalOff();
  };

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button onClick={handleClick} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Wrapper for the image and photographer info */}
      <div className="photo-details-modal__images">
        {/* Larger version of the selected photo and its info */}
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt="Larger photo" />

        {/* Photographer details */}
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt="Profile picture" />
          <div className="photo-details-modal__photographer-info">
            <div>{selectedPhoto.user.username}</div>
            <div className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>

        {/* Similar photos */}
        <div>
          <header className="photo-details-modal__header">Similar Photos</header>
          <div className="photo-details-modal__top-bar">
            <PhotoList
              photos={similarPhotos}
              fav={fav}
              toggleFav={toggleFav}
              switchModalOn={switchModalOn}
            />
          </div>
        </div>

      </div>


    </div>
  )
};

export default PhotoDetailsModal;
