import React from "react";

import "./../../../styles/index.scss";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img
              className={styles.logo__img}
              src="./images/icons/logo.png"
              alt=""
            />
          </div>
          <nav className="navigation">
            <ul className={styles.navigation__list}>
              <li className={styles.navigation__item}>
                <a className={styles.navigation__link} href="#">
                  Main
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a className={styles.navigation__link} href="#">
                  Timetable
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a className={styles.navigation__link} href="#">
                  Favorites
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a className={styles.navigation__link} href="#">
                  Chats
                </a>
              </li>
            </ul>
          </nav>
          <div className="profile">
            <a className="profile__link" href="#">
              <img
                className={styles.profile__img}
                src="./images/icons/profile.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
