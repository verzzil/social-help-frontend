import React from "react";
import Doctors from "../../structures/Doctors/Doctors";

import "./../../../styles/index.scss";
import styles from "./styles/doctors-page.module.scss";

const DoctorPage = () => {
  return (
    <div className={styles.wrapper}>
      <Doctors />
    </div>
  );
};

export default DoctorPage;
