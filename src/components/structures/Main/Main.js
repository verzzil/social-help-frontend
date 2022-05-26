import { useState, useEffect } from "react";

import styles from "./main.module.scss";

import TopicList from "../../options/Topics/List/TopicList";
import SpecialistList from "../../options/Specialists/List/SpecialistList";
import DoctorsList from "../Doctors/list/DoctorsList";

const Main = () => {
  const [topics, setTopics] = useState(null);
  const [specialists, setSpecialists] = useState(null);
  const [specializations, setSpecializations] = useState(null);

  useEffect(() => {
    const getTopics = async () => {
      await fetch("http://localhost/authentication/allProblem")
        .then((res) => res.json())
        .then((result) => {
          setTopics(result);
        });
    };
    const getSpecialization = async () => {
      await fetch("http://localhost/authentication/AllSpecialization")
        .then((res) => res.json())
        .then((result) => {
          setSpecializations(result);
        });
    };

    getTopics();
    getSpecialization();
  }, []);

  const getSpecialists = async (id) => {
    await fetch(`http://localhost/authentication/problem/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setSpecialists(result);
      });
  }

  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Choose a specialist or topic</h1>
          <h2 className={styles.topics__popular}>Popular topics</h2>
          {topics && <TopicList getSpecialists={getSpecialists} topics={topics} />}
        </div>
      </section>
      {specialists && <section className={styles.specialists}>
        <div className={styles.container}>
          <h2 className={styles.specialists__title}>Specialists</h2>
          <DoctorsList specialists={specialists} />
        </div>
      </section>}
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>All specializations</h1>
          {specializations && <SpecialistList specializations={specializations} />}
        </div>
      </section>
    </main>
  );
};

export default Main;
