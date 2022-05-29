import React from "react";

import "./../../../styles/index.scss";
import styles from "./timetable.module.scss";

import Meetings from "./Meetings";

const Timetable = ({accessToken}) => {
  return (
    <div className={styles.wrapper}>
      <Meetings accessToken={accessToken} />
    </div>
  );
};

export default Timetable;
