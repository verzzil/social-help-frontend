import React from "react";

import "./../../../styles/index.scss";
import styles from "./main-page.module.scss";

import Main from "../../structures/Main/Main";

const MainPage = ({ token }) => {
  return (
    <div className={styles.wrapper}>
      <Main token={token} />
    </div>
  );
};

export default MainPage;
