import TopicItem from "../Items/TopicItem";

import styles from "./topic-list.module.scss";

const TopicList = ({ topics, getSpecialists }) => {
  return (
    <ul className={styles.topics__list}>
      {topics.map((topic) => {
        return <TopicItem key={topic.id} id={topic.id} getSpecialists={getSpecialists} name={topic.problemDescription} />;
      })}
    </ul>
  );
};

export default TopicList;
