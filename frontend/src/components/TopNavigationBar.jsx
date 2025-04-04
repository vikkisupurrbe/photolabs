import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge'

const TopNavigation = (props) => {
  const { topics, fav } = props;

  // Check if fav has any true values
  const isFavPhotoExist = (fav) => Object.values(fav).some(value => value === true);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist(fav)} />
    </div>
  )
};

export default TopNavigation;
