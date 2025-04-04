import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import { useState } from 'react';

const PhotoFavButton = () => {
  // Define state for fav button
  const [fav, setFav] = useState(false);

  // Create a function to switch on or off the fav button based on the latest state value
  const switchFav = () => setFav(prevFav => !prevFav);

  // Handle click function
  const handleClick = () => {
    switchFav();
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Pass fav state to fav button */}
        <span><i><FavIcon selected={fav} /></i></span>
      </div>
    </div>
  );
};

export default PhotoFavButton;
