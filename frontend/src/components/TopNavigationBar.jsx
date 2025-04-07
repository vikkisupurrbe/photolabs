import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge'

const TopNavigation = (props) => {
  const { topics, fav, setTopicSelected } = props;

  // Click on logo to go back to default photos
  const handleLogoClick = () => {
    setTopicSelected();
  };

  // Check if fav has any true values
  const isFavPhotoExist = (fav) => Object.values(fav).some(value => value === true);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleLogoClick} >PhotoLabs</span>
      <TopicList
        topics={topics}
        setTopicSelected={setTopicSelected}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist(fav)} />
    </div>
  )
};

export default TopNavigation;
