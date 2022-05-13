import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.profile}>
        <section className={styles.profile__section}>
          <div className={styles.container}>
            <h1 className={styles.profile__title}>Editing Profile</h1>
            <h2 className={styles.profile__subtitle}>Personal Data</h2>
            <div className={styles.profile__content}>
              {/* <div className={styles.profile__header}>
                <div className={styles.profile__img}></div>
                <div className="profile__contacts">
                  <h2 className={styles.profile__name}>Vasiliy Pupkin</h2>
                  <p className={styles.profile__location}>Kazan, Russia</p>
                </div>
              </div> */}
              <form className={styles.form}>
                <div className={styles.form__inputs}>
                  <input type="text" name="firstName" placeholder="Firstname" />
                  <input type="text" name="lastName" placeholder="Lastname" />
                  <input
                    type="text"
                    name="patronymic"
                    placeholder="Patronymic"
                  />
                  <input type="text" name="city" placeholder="City" />
                  <input
                    type="date"
                    name="birthday"
                    placeholder="Date of Birth"
                  />
                  <input type="number" name="age" placeholder="Age" />
                </div>
                <div className={styles.form__avatar}>
                  <div className={styles.form__frame}>
                    <div className={styles.form__img}></div>
                    <input className="file" type="file" />
                  </div>

                  <p className={styles.form__rating}>Rating 5.0</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
