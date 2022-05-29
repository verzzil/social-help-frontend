import React from "react";
import { Link } from "react-router-dom";

import "./../../styles/index.scss";
import "./sign-up-style.scss";

const SignUpForm = ({ changeValidate }) => {
  const [signUpForm, setSignUpForm] = React.useState({
    firstName: null,
    lastName: null,
    patronymic: null,
    birthday: null,
    city: null,
    gender: null,
    qualification: null,
    education: null,
    qualification_improvement: null,
    experience: null,
    specialization: null,
    age: null,
    email: null,
    hashPassword: null,
  });
  const [patient, setPatient] = React.useState(false);
  const [doctor, setDoctor] = React.useState(false);

  const changeDoctor = () => {
    setDoctor((prev) => !prev);
    if (patient) {
      setPatient(!patient);
    }
  };

  const changePatient = () => {
    setPatient((prev) => !prev);
    if (doctor) {
      setDoctor(!doctor);
    }
  };

  const changeForm = (event) => {
    const { value, name } = event.target;
    setSignUpForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const sendData = async (url, data) => {
    data = { ...data, specialist: doctor ? true : false };
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
    sendData("https://2e00-178-213-240-41.eu.ngrok.io/sign_up", signUpForm);
    changeValidate();
  };

  return (
    <div className="wrapper">
      {!patient && !doctor && (
        <div className="option">
          <h1 className="option__title">Кто вы?</h1>
          <div className="option__links">
            <div className="option__link option__link_patient">
              <button onClick={changePatient}>Пациент</button>
            </div>
            <div className="option__link option__link_doctor">
              <button onClick={changeDoctor}>Врач</button>
            </div>
          </div>
        </div>
      )}

      {doctor && (
        <div className="sign-up">
          <form onSubmit={sendForm} action="" className="sign-up__form form">
            <h1 className="form__title title">Добро пожаловать!</h1>
            <div className="form__input">
              <input
                type="text"
                placeholder="Имя"
                name="firstName"
                value={signUpForm.firstName}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Фамилия"
                name="lastName"
                value={signUpForm.lastName}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Отчество"
                name="patronymic"
                value={signUpForm.patronymic}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="date"
                placeholder="Дата рождения"
                name="birthday"
                value={signUpForm.birthday}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Город"
                name="city"
                value={signUpForm.city}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Пол"
                name="gender"
                value={signUpForm.gender}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <textarea
                placeholder="Квалификация"
                name="qualification"
                value={signUpForm.qualification}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <textarea
                placeholder="Образование"
                name="education"
                value={signUpForm.education}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <textarea
                placeholder="Повышение квалификации"
                name="qualification_improvement"
                value={signUpForm.qualification_improvement}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <input
                type="number"
                placeholder="Опыт работы"
                name="experience"
                value={signUpForm.experience}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Специализация"
                name="specialization"
                value={signUpForm.specialization}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signUpForm.email}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="password"
                placeholder="Пароль"
                name="hashPassword"
                value={signUpForm.hashPassword}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <button type="submit">Зарегистрироваться</button>
            </div>
          </form>
          <p className="sign-up__hint">
            Есть аккаунт? <Link to="/sign_in">Войти</Link>
          </p>
        </div>
      )}

      {patient && (
        <div className="sign-up">
          <form onSubmit={sendForm} action="" className="sign-up__form form">
            <h1 className="form__title title">Добро пожаловать</h1>
            <div className="form__input">
              <input
                type="text"
                placeholder="Имя"
                name="firstName"
                value={signUpForm.firstName}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Фамилия"
                name="lastName"
                value={signUpForm.lastName}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Отчество"
                name="patronymic"
                value={signUpForm.patronymic}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="date"
                placeholder="Дата рождения"
                name="birthday"
                value={signUpForm.birthday}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Город"
                name="city"
                value={signUpForm.city}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Пол"
                name="gender"
                value={signUpForm.gender}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signUpForm.email}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="password"
                placeholder="Пароль"
                name="hashPassword"
                value={signUpForm.hashPassword}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <button type="submit">Зарегистрироваться</button>
            </div>
          </form>
          <p className="sign-up__hint">
            Есть аккаунт? <Link to="/sign_in">Войти</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
