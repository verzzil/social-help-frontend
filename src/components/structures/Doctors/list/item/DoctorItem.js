import { useState } from "react";
import styles from "./styles/item.module.scss";

import Modal from "../../../Modal/Modal";

const DoctorItem = () => {
  const [modal, setModal] = useState(false);

  const changeModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <li onClick={changeModal} className={styles.item}>
        <div className={styles.item__container}>
          <div className={styles.item__img}>
            <img
              className={styles.img}
              src="./images/icons/avatar.png"
              alt=""
            />
          </div>
          <div className="item__info">
            <p className={styles.name}>Vasya pupkin</p>
            <p className="experience">Experience - 5 years</p>
          </div>
        </div>
      </li>
      {modal && <Modal changeModal={changeModal} />}
    </>
  );
};

export default DoctorItem;
