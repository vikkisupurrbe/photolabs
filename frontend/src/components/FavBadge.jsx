import '../styles/FavBadge.scss';
import FavIcon from './FavIcon';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  )
};

export default FavBadge;
