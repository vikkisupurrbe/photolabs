import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  // Pass in props
  const {location, urls, user} = props;
  console.log(props) // Debugging to ensure props are passed correctly
  return(
    <article className="photo-list-item">
      <figure className="photo-list-item_image">
        <img className="photo-list-item_photo" src={urls.regular} alt="Photo" />
      </figure>

      <section className="photo-list-item_photographer">
        <img className="photo-list-item_profile-pic" src= {user.profile} alt="Profile picture" />
        <p className="photo-list-item_username">{user.username}</p>
        <p className="photo-list-item_location">{location.city}, {location.country}</p>
      </section>
    </article>
  )
};

export default PhotoListItem;
