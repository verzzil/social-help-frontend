import { useState, useEffect } from "react";

import styles from "./main.module.scss";

import TopicList from "../../options/Topics/List/TopicList";
import SpecialistList from "../../options/Specialists/List/SpecialistList";
import DoctorsList from "../Doctors/list/DoctorsList";

const Main = ({ token }) => {
  const [topics, setTopics] = useState(null);
  const [specialists, setSpecialists] = useState(null);
  const [specializations, setSpecializations] = useState(null);

  const photos = [
    "./images/topics/img1.png",
    "./images/topics/img2.png",
    "./images/topics/img3.png",
  ];

  useEffect(() => {
    const getTopics = async () => {
      await fetch("https://2e00-178-213-240-41.eu.ngrok.io/allProblem")
        .then((res) => res.json())
        .then((result) => {
          setTopics(result);
        });
    };
    const getSpecialization = async () => {
      await fetch("https://2e00-178-213-240-41.eu.ngrok.io/AllSpecialization")
        .then((res) => res.json())
        .then((result) => {
          setSpecializations(result);
        });
    };

    getTopics();
    getSpecialization();
  }, []);

  const getSpecialists = async (id) => {
    await fetch(`https://2e00-178-213-240-41.eu.ngrok.io/problem/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setSpecialists(result);
      });
  };

  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>
            Выберите специалиста или проблему
          </h1>
          <h2 className={styles.topics__popular}>Популярные проблемы</h2>
          {topics && (
            <TopicList photos={photos} getSpecialists={getSpecialists} topics={topics} />
          )}
        </div>
      </section>
      {specialists && (
        <section className={styles.specialists}>
          <div className={styles.container}>
            <h2 className={styles.specialists__title}>Специалисты</h2>
            <DoctorsList specialists={specialists} />
          </div>
        </section>
      )}
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Все специализации</h1>
          {specializations && (
            <SpecialistList specializations={specializations} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
