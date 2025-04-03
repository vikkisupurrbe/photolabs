import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  // Pass in props
  const {location, urls, user} = props.photo;
  console.log(props) // Debugging to ensure props are passed correctly
  return(
    <article className="photo-list-item">
      <figure className="photo-list-item__image">
        <img className="photo-list-item__photo" src={urls.regular} alt="Photo" />
      </figure>

      <section className="photo-list-item__photographer">
        <img className="photo-list-item__profile-pic" src= {user.profile} alt="Profile picture" />
        <p className="photo-list-item__username">{user.username}</p>
        <p className="photo-list-item__location">{location.city}, {location.country}</p>
      </section>
    </article>
  )
};

export default PhotoListItem;
