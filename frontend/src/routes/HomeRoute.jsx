import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, fav, toggleFav } = props;

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} />
      <PhotoList
        photos={photos}
        fav={fav}
        toggleFav={toggleFav}
      />
    </div>
  );
};

export default HomeRoute;
