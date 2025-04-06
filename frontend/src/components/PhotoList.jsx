import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { fav, updateToFavPhotoIds, setPhotoSelected } = props;

  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        fav={fav}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
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
