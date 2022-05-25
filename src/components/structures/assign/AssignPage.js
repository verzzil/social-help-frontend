import Assign from "./Assign";
import styles from "./assign.module.scss";

const AssignPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Assign meeting</h1>
          <Assign />
        </div>
      </section>
    </main>
  );
};

export default AssignPage;