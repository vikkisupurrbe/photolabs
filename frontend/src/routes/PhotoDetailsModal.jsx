import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { switchModalOff, selectedPhoto } = props;
  console.log(props);

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

      </div>


    </div>
  )
};

export default PhotoDetailsModal;
