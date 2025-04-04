import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        title={topic.title}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topics}
    </div>
  );
};

export default TopicList;
