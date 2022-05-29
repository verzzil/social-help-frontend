import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./profile.module.scss";

const Profile = ({ falseEdited, accessToken }) => {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(
    "https://avatars.mds.yandex.net/i?id=e597b5eee31aed3c6aa1a7afe0e6357a-5865029-images-thumbs&n=13"
  );

  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: accessToken,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${response.status}`
      );
    }

    console.log(response);

    return await response.json();
  };

  const sendForm = (event) => {
    event.preventDefault();
    sendData("https://2e00-178-213-240-41.eu.ngrok.io/files", file);
  };

  const getFile = (event) => {
    const { value } = event.target;
    setFile(value);
  };

  useEffect(() => {
    falseEdited();
    const getUser = async () => {
      await fetch("https://2e00-178-213-240-41.eu.ngrok.io/profile", {
        headers: { Authorization: '232323' },
      })
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
            <h1 className={styles.profile__title}>Редактирование профиля</h1>
            <h2 className={styles.profile__subtitle}>Персональные данные</h2>
            <div className={styles.profile__content}>
              <form onSubmit={sendForm} className={styles.form}>
                <div className={styles.info__description}>
                  <h1 className={styles.name}>
                    {user && `${user.firstName} ${user.lastName}`}
                  </h1>
                  <p className={styles.specialization}>
                    Дата рождения: {user && `${user.birthday.substr(0, 10)}`}
                  </p>
                  {/* <p className={styles.specialization}>Возраст: 20</p> */}
                  <p className={styles.specialization}>
                    Город: {user && `${user.city}`}
                  </p>
                </div>
                <div className={styles.form__avatar}>
                  <div className={styles.form__frame}>
                    <div className={styles.form__img}>
                      <img src={file} alt="" />
                    </div>
                    <input
                      className="file"
                      name="file"
                      type="file"
                      onChange={getFile}
                      // value={image}
                    />
                    {<button>Edit</button>}
                  </div>

                  <p className={styles.form__rating}>Рейтинг 5.0</p>
                </div>
              </form>
              <div className={styles.chat}>
                <Link to="/edit" className={styles.chat__link}>
                  Редактировать
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
