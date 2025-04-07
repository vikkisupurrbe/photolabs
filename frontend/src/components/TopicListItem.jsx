import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, id, setTopicSelected } = props;

  // Handle click function
  const handleClick = () => {
    setTopicSelected(id);
  };

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span onClick={handleClick}>{title}</span>
    </div>
  );
};

export default TopicListItem;
