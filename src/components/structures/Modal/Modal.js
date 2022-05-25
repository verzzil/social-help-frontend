import styles from "./styles/modal.module.scss";
import { Link } from "react-router-dom";

const Modal = ({ changeModal }) => {
  return (
    <div className={styles.modal}>
      <div onClick={changeModal} className={styles.modal__img}>
        <img className={styles.img} src="./images/icons/exit.png" alt="" />
      </div>
      <img className={styles.avatar} src="./images/icons/avatar.png" alt="" />
      <p className={styles.modal__spec}>Pediatrician</p>
      <h1 className={styles.modal__name}>Vasya Pupkin</h1>
      <p className="modal__experience">Experience: </p>
      <p className="modal__experience">Education: </p>
      <p className="modal__experience">Qualification: </p>
      <div className={styles.button__container}>
        <Link to="/assign" className={styles.assign}>Assign</Link>
      </div>
    </div>
  );
};

export default Modal;
