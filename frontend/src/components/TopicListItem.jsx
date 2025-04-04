import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
