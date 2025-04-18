import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {
  const { photoId, fav, updateToFavPhotoIds } = props;

  // Handle click function
  const handleClick = () => {
    updateToFavPhotoIds(photoId);
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Pass fav state to fav button */}
        <span><i><FavIcon selected={fav[photoId]} /></i></span>
      </div>
    </div>
  );
};

export default PhotoFavButton;
