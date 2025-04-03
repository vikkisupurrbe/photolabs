import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  // Pass in props
  const {location, urls, user} = props.photo;
  console.log(props) // Debugging to ensure props are passed correctly
  return(
    <div className="photo-list__item">
      {/* Photo */}
        <img className="photo-list__image" src={urls.regular} alt="Photo" />
      
      {/* Photographer info */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src= {user.profile} alt="Profile picture" />

        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list-item__location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
