import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from "../components/PhotoListItem";
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { onClosePhotoDetailsModal, selectedPhoto, fav, updateToFavPhotoIds } = props;

  // For each selected photo, show its similar photos
  const similarPhotos = Object.values(selectedPhoto.similar_photos).map((similarPhoto) => {
    return (
      <PhotoListItem
        key={similarPhoto.id}
        photo={similarPhoto}
        fav={fav}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={() => { }}
      />
    );
  })

  // Handle click function
  const handleClick = () => {
    onClosePhotoDetailsModal();
  };

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button onClick={handleClick} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Wrapper for the image and photographer info */}
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={selectedPhoto.id}
          fav={fav}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
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
            {similarPhotos}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
