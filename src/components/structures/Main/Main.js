import styles from "./main.module.scss";

import TopicList from "../../options/Topics/List/TopicList";

const Main = () => {
    return(
        <main className={styles.main}>
            <section className={styles.topics}>
                <div className={styles.container}>
                    <h1 className={styles.topics__title}>Choose a specialist or topic</h1>
                    <h2 className={styles.topics__popular}>Popular topics</h2>
                    <TopicList />
                </div>
            </section>
        </main>
    )
}

export default Main;