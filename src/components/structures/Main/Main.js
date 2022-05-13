import styles from "./main.module.scss";

import TopicList from "../../options/Topics/List/TopicList";
import SpecialistList from "../../options/Specialists/List/SpecialistList";

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <h1 className={styles.topics__title}>Choose a specialist or topic</h1>
          <h2 className={styles.topics__popular}>Popular topics</h2>
          <TopicList />
        </div>
      </section>
      <section className={styles.specialists}>
        <div className={styles.container}>
          <h2 className={styles.specialists__title}>Specialists</h2>
          <SpecialistList />
        </div>
      </section>
    </main>
  );
};

export default Main;
