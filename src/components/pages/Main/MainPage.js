import React from "react";

import "./../../../styles/index.scss";
import styles from "./main-page.module.scss";

import Header from "../../structures/Header/Header";
import Footer from "../../structures/Footer/Footer";
import Main from "../../structures/Main/Main";

const MainPage = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
