import { useEffect } from "react";
import Assign from "./Assign";
import styles from "./assign.module.scss";

const AssignPage = ({id, accessToken, changeAssigned}) => {
  // useEffect(() => {
  //   falseAssigned();
  // }, []);

  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Назначить встречу</h1>
          <Assign changeAssigned={changeAssigned} accessToken={accessToken} id={id}/>
        </div>
      </section>
    </main>
  );
};

export default AssignPage;
