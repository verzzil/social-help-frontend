import styles from "./specialist-item.module.scss";

const SpecialistItem = ({ name, description }) => {
  return (
    <li className={styles.specialists__item}>
      <div className={styles.specialists__card}>
        <div className={styles.specialists__description}>
          <h2 className={styles.specialization}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <a href="#" className={styles.chatLink}>
            <span className={styles.chatLink__content}>Choose</span>
          </a>
        </div>
        <div className={styles.specialists__img}>
          <img
            className={styles.img}
            src="./images/specialists/pediatr.jpg"
            alt=""
          />
        </div>
      </div>
    </li>
  );
};

export default SpecialistItem;
