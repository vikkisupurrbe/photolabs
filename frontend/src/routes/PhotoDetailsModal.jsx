import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { switchModalOff, selectedPhoto } = props;
  console.log(selectedPhoto);

  // Handle click function
  const handleClick = () => {
    switchModalOff();
  };

  return (
    <div className="photo-details-modal">
      <button onClick={handleClick} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
