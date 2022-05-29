import styles from "./meeting.module.scss";

import MeetingList from "./MeetingList";

const Meetings = ({ accessToken }) => {
  return (
    <main className={styles.main}>
      <section className={styles.topics}>
        <div className={styles.container}>
          <MeetingList accessToken={accessToken} />
        </div>
      </section>
    </main>
  );
};

export default Meetings;
