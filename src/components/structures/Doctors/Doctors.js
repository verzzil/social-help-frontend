import DoctorsList from "./list/DoctorsList";
import styles from "./styles/doctors.module.scss";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);
  useEffect(() => {
    const getSpecialists = async () => {
      await fetch("http://localhost/authentication/problem/allSpecialist")
        .then((res) => res.json())
        .then((result) => {
          setDoctors([result]);
        });
    };
    getSpecialists();
  }, [doctors]);
  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Choose a specialist</h1>
          <DoctorsList />
        </div>
      </section>
    </main>
  );
};

export default Doctors;
