import { Link } from "react-router-dom";
import styles from "./specialist-item.module.scss";

const SpecialistItem = ({ specialization, id }) => {
  return (
    <li className={styles.specialists__item}>
        <div className={styles.specialists__card}>
          <div className={styles.specialists__description}>
            <h2 className={styles.specialization}>{specialization}</h2>
            {/* <p className={styles.description}>{description}</p> */}
            <Link to={`/doctors/${id}`} className={styles.chatLink}>
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
