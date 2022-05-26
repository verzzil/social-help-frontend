import DoctorsList from "./list/DoctorsList";
import styles from "./styles/doctors.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctors = ({doctors}) => {
  
  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Choose a specialist</h1>
          <DoctorsList specialists={doctors} />
        </div>
      </section>
    </main>
  );
};

export default Doctors;
