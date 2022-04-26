import TopicItem from "../Items/TopicItem";

import styles from "./topic-list.module.scss";

const TopicList = () => {
  return (
    <ul className={styles.topics__list}>
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <TopicItem />
    </ul>
  );
};

export default TopicList;
