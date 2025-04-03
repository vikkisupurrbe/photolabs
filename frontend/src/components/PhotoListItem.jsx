import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  // Pass in props
  const {location, urls, user} = props;

  return(
    <div className="photo-list__item">
      {/* Photo */}
        <PhotoFavButton />
        <img className="photo-list__image" src={urls.regular} alt="Photo" />
      {/* Photographer info */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src= {user.profile} alt="Profile picture" />

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
