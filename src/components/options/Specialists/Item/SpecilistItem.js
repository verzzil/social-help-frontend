import { Link } from "react-router-dom";
import styles from "./specialist-item.module.scss";

const SpecialistItem = ({ name, firstname, lastname }) => {
  return (
    <li className={styles.specialists__item}>
      <div className={styles.specialists__card}>
        <div className={styles.specialists__description}>
          <h2 className={styles.specialization}>{name}</h2>
<<<<<<< HEAD
          <p className={styles.description}>{firstname} {lastname}</p>
          <a href="#" className={styles.chatLink}>
=======
          <p className={styles.description}>{description}</p>
          <Link to={`/${name}`} className={styles.chatLink}>
>>>>>>> 947a7ed0aaee3bb526d29ef8249e0bde3c1465da
            <span className={styles.chatLink__content}>Choose</span>
          </Link>
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
