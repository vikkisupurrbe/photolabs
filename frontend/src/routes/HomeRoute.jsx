import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, fav, toggleFav, switchModalOn } = props;

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} fav={fav} />
      <PhotoList
        photos={photos}
        fav={fav}
        toggleFav={toggleFav}
        switchModalOn={switchModalOn}
      />
    </div>
  );
};

export default HomeRoute;
