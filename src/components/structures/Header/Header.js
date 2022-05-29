import { Link } from "react-router-dom";

import "./../../../styles/index.scss";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                className={styles.logo__img}
                src="./images/icons/logo.png"
                alt=""
              />
            </Link>
          </div>
          <nav className="navigation">
            <ul className={styles.navigation__list}>
              <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} to="/">
                  Главная
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} to="/timetable">
                  Расписание
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} to="/favorites">
                  Избранное
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} to="/chats">
                  Чат
                </Link>
              </li>
            </ul>
          </nav>
          <div className="profile">
            <Link className="profile__link" to="/profile">
              <img
                className={styles.profile__img}
                src="./images/icons/profile.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
