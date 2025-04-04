import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { fav, toggleFav } = props;

  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        photoId={photo.id}
        fav={fav}
        toggleFav={toggleFav}
      />
    );
  });

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos}
    </ul>
  );
};

export default PhotoList;
