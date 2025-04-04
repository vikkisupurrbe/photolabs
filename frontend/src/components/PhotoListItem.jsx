import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { location, urls, user, photoId, fav, toggleFav } = props;
  
  return (
    <div className="photo-list__item">
      {/* Photo */}
      <PhotoFavButton 
        photoId={photoId}
        fav={fav}
        toggleFav={toggleFav}
      />
      <img className="photo-list__image" src={urls.regular} alt="Photo" />
      {/* Photographer info */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="Profile picture" />
        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
