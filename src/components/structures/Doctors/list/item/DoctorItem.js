import { useState } from "react";
import styles from "./styles/item.module.scss";
import { Link } from "react-router-dom";

import Modal from "../../../Modal/Modal";

const DoctorItem = ({firstname, lastname, city, experience}) => {
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
            <p className={styles.name}>{firstname} {lastname}</p>
            <p className={styles.name}>{city}</p>
            <p className="experience">Опыт - {experience} лет</p>
          </div>
          <div className="chat">
          <Link to="/chats">Договориться</Link>
          </div>
          
        </div>
      </li>
      {modal && <Modal changeModal={changeModal} />}
    </>
  );
};

export default DoctorItem;
