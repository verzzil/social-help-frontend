import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import styles from "./userprofile.module.scss";

import AssignPage from "../../structures/assign/AssignPage";

const UserProfile = ({accessToken, changeAssigned}) => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [assign, setAssign] = useState(false);

  const changeAssign = () => {
    setAssign(prev => !prev);
  };

  useEffect(() => {
    const getUser = async () => {
      await fetch(`https://2e00-178-213-240-41.eu.ngrok.io/profile/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setUser(result);
        });
    };
    getUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <main className={styles.profile}>
        <section className={styles.profile__section}>
          <div className={styles.container}>
            {user && user.specialist === false && (
              <>
                <div className={styles.info}>
                  <div className={styles.info__img}>
                    <img src="./../images/icons/avatar.png" alt="" />
                  </div>
                  <div className="info__description">
                    <h1 className={styles.name}>
                      {user.firstName} {user.lastName} {user.patronymic}
                    </h1>
                    <p className={styles.specialization}>
                      Дата рождения: {user.birthday.substr(0, 10)}
                    </p>
                    {/* <p className={styles.specialization}>Возраст: 20</p> */}
                    <p className={styles.specialization}>Город: {user.city}</p>
                  </div>
                </div>
                <div className={styles.chat}>
                  <button onClick={changeAssign} className={styles.chat__link}>
                    Назначить
                  </button>
                </div>
              </>
            )}

            {assign && <AssignPage changeAssigned={changeAssigned} accessToken={accessToken} id={id} />}

            {user && user.specialist === true && (
              <>
                <div className={styles.info}>
                  <div className={styles.info__img}>
                    <img src="./../images/icons/avatar.png" alt="" />
                  </div>
                  <div className="info__description">
                    <h1 className={styles.name}>
                      {user.firstName} {user.lastName} {user.patronymic}
                    </h1>
                    <p className={styles.specialization}>Pediatrician</p>
                    <p className={styles.specialization}>
                      Experience: {user.additionalInfoForSpecialist.experience}{" "}
                      years
                    </p>
                  </div>
                </div>
                <div className={styles.qualification}>
                  <h1 className={styles.qualification__title}>
                    Qualification:
                  </h1>
                  <p className={styles.specialization}>
                    {user.additionalInfoForSpecialist.qualification}
                  </p>
                </div>
                <div className={styles.qualification}>
                  <h1 className={styles.qualification__title}>Education:</h1>

                  <p className={styles.specialization}>
                    {user.additionalInfoForSpecialist.education}
                  </p>
                </div>

                <div className={styles.qualification}>
                  <h1 className={styles.qualification__title}>
                    Qualification improvement:
                  </h1>

                  <p className={styles.specialization}>
                    {user.additionalInfoForSpecialist.qualification_improvement}
                  </p>
                </div>

                <div className={styles.chat}>
                  <Link to="/chats" className={styles.chat__link}>
                    Чат
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
