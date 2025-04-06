import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, fav, updateToFavPhotoIds, setPhotoSelected } = props;

  // Handle click function
  const handleClick = () => {
    setPhotoSelected(photo);
  };

  return (
    <div className="photo-list__item">
      {/* Photo */}
      <PhotoFavButton
        photoId={photo.id}
        fav={fav}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <img onClick={handleClick} className="photo-list__image" src={photo.urls.regular} alt="Photo" />

      {/* Photographer info */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile picture" />
        <div className="photo-list__user-info">
          <div>{photo.user.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
