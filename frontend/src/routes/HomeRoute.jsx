import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
