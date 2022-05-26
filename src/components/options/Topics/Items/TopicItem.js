import styles from "./topic-item.module.scss";

const TopicItem = ({ name, getSpecialists, id }) => {
  return (
    <li onClick={() => getSpecialists(id)} className={styles.item}>
      <div className={styles.item__imgContainer}>
        <img
          className={styles.item__img}
          src="./images/topics/img1.png"
          alt=""
        />
      </div>
      <p className={styles.item__name}>{name}</p>
    </li>
  );
};

export default TopicItem;
