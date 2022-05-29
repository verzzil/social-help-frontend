import styles from "./item.module.scss";

const MeetingItem = ({ table }) => {
  const date = new Date(table.timeStamp).toLocaleString();
  return (
    <li className={styles.card}>
      <div className={styles.card__container}>
        <div className="info">
          <p className={styles.name}>
            {table.firstNameUser} {table.lastNameUser}
          </p>
          <p className={styles.description}>{table.description}</p>
        </div>
        <div className={styles.time}>
          <p className={styles.time__actual}>{date}</p>
          {/* <p className={styles.time__actual}>28.05.2022</p> */}
        </div>
      </div>
    </li>
  );
};

export default MeetingItem;
