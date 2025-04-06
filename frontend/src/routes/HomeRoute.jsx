import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, fav, updateToFavPhotoIds, setPhotoSelected } = props;

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} fav={fav} />
      <PhotoList
        photos={photos}
        fav={fav}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
