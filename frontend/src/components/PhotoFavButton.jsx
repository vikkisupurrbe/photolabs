// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {
  const {fav, switchFav} = props;
  console.log(props);

  // Handle click function
  const handleClick = () => {
    switchFav();
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* When fav button is on */}
        {fav === "on" && <span><i><FavIcon selected = {true} /></i></span>}
        {/* When fav button is off */}
        {fav === "off" && <span><i><FavIcon selected = {false}/></i></span>}
      </div>
    </div>
  );
};

export default PhotoFavButton;
