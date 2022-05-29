import React from "react";

import styles from "./profile.module.scss";

const EditPage = ({ changeEdited, accessToken }) => {
  const [editForm, setEditForm] = React.useState({
    firstName: null,
    lastName: null,
    // patronymic: null,
    city: null,
    gender: null,
  });

  //   React.useEffect(() => {
  //     changeEdited();
  //   }, []);

  const changeForm = (event) => {
    const { value, name } = event.target;
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${response.status}`
      );
    }

    return await response.json();
  };

  const sendForm = async (event) => {
    event.preventDefault();
    await sendData(
      "https://2e00-178-213-240-41.eu.ngrok.io/editProfile",
      editForm
    );
    changeEdited();
  };
  return (
    <div className={styles.wrapper}>
      <main className={styles.profile}>
        <section className={styles.profile__section}>
          <div className={styles.edit}>
            <form onSubmit={sendForm} className="sign-up__form form">
              <h1 className="form__title title">Редактировать профиль</h1>
              <div className="form__input">
                <input
                  type="text"
                  placeholder="Имя"
                  name="firstName"
                  value={editForm.firstName}
                  onChange={changeForm}
                />
              </div>
              <div className="form__input">
                <input
                  type="text"
                  placeholder="Фамилия"
                  name="lastName"
                  value={editForm.lastName}
                  onChange={changeForm}
                />
              </div>
              {/* <div className="form__input">
                <input
                  type="text"
                  placeholder="Отчество"
                  name="patronymic"
                  value={editForm.patronymic}
                  onChange={changeForm}
                />
              </div> */}
              <div className="form__input">
                <input
                  type="text"
                  placeholder="Город"
                  name="city"
                  value={editForm.city}
                  onChange={changeForm}
                />
              </div>
              <div className="form__input">
                <input
                  type="text"
                  placeholder="Пол"
                  name="gender"
                  value={editForm.gender}
                  onChange={changeForm}
                />
              </div>
              <div className="form__input">
                <button type="submit">Подтвердить</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditPage;
