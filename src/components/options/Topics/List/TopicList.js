import TopicItem from "../Items/TopicItem";

import styles from "./topic-list.module.scss";

const TopicList = ({ topics }) => {
  return (
    <ul className={styles.topics__list}>
      {topics.map((topic) => {
        return <TopicItem name={topic.problemDescription} />;
      })}
    </ul>
  );
};

export default TopicList;
