import styles from "./topic-item.module.scss";

const TopicItem = () => {
  return (
    <li className={styles.item}>
      <a className="item__link" href="#">
        <div className={styles.item__imgContainer}>
          <img
            className={styles.item__img}
            src="./images/topics/img1.png"
            alt=""
          />
        </div>
        <p className={styles.item__name}>Throat Pain</p>
      </a>
    </li>
  );
};

export default TopicItem;
