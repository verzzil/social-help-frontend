import { useState, useEffect } from "react";

import styles from "./main.module.scss";

import TopicList from "../../options/Topics/List/TopicList";
import SpecialistList from "../../options/Specialists/List/SpecialistList";

const Main = () => {
  const [topics, setTopics] = useState(null);
  const [specialists, setSpecialists] = useState(null);

  useEffect(() => {
    const getTopics = async () => {
      await fetch("http://localhost/authentication/allProblem")
        .then((res) => res.json())
        .then((result) => {
          setTopics([result]);
        });
    };
    const getSpecialists = async () => {
      await fetch("http://localhost/authentication/problem/allSpecialist")
        .then((res) => res.json())
        .then((result) => {
          setSpecialists([result]);
        });
    };
    getTopics();
    getSpecialists();
  });

  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Choose a specialist or topic</h1>
          <h2 className={styles.topics__popular}>Popular topics</h2>
          <TopicList topics={topics} />
        </div>
      </section>
      <section className={styles.specialists}>
        <div className={styles.container}>
          <h2 className={styles.specialists__title}>Specialists</h2>
          <SpecialistList specialists={specialists} />
        </div>
      </section>
    </main>
  );
};

export default Main;
