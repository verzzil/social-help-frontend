import React from "react";
import { Link } from "react-router-dom";

import "./../../styles/index.scss";
import "./sign-up-style.scss";

const SignInForm = ({ changeConfirmed, addToken }) => {
  const [signInForm, setSignInForm] = React.useState({
    email: null,
    hashPassword: null,
  });

  const changeForm = (event) => {
    const { value, name } = event.target;
    setSignInForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        addToken(result);
        localStorage.setItem("token", JSON.stringify(result));
      addToken(JSON.parse(localStorage.getItem("token")));
      });

    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${response.status}`
      );
    }

    return await response.json();
  };

  const sendForm = (event) => {
    event.preventDefault();
    sendData("https://2e00-178-213-240-41.eu.ngrok.io/login", signInForm);
    changeConfirmed();
  };

  return (
    <div className="wrapper">
      <div className="sign-up">
        <form onSubmit={sendForm} action="" class="sign-up__form form">
          <h1 className="form__title title">Добро пожаловать</h1>
          <div className="form__input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signInForm.email}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <input
              type="password"
              placeholder="Пароль"
              name="hashPassword"
              value={signInForm.hashPassword}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <button type="submit">Войти</button>
          </div>
        </form>
        <p className="sign-up__hint">
          Нет аккаунта? <Link to="/sign_up">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
