import React from "react";

import "./../../../styles/index.scss";
import styles from "./main-page.module.scss";

import Main from "../../structures/Main/Main";

const MainPage = () => {

  return (
    <div className={styles.wrapper}>
      <Main />
    </div>
  );
};

export default MainPage;
