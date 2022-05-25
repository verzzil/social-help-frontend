import DoctorsList from "./list/DoctorsList";
import styles from "./styles/doctors.module.scss";

const Doctors = () => {
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
