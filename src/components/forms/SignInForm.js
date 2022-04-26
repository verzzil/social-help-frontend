import React from "react";
import { Link } from "react-router-dom";

import "./../../styles/index.scss";
import "./sign-up-style.scss";

const SignInForm = () => {
  const [signInForm, setSignInForm] = React.useState({
    email: null,
    password: null,
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
    sendData("http://localhost:8080/sign_in", signInForm);
  };
  return (
    <div className="wrapper">
      <div className="sign-up">
        <form onSubmit={sendForm} action="" class="sign-up__form form">
          <h1 className="form__title title">Welcome</h1>
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
              placeholder="Password"
              name="password"
              value={signInForm.password}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <button type="submit">Sign in</button>
          </div>
        </form>
        <p className="sign-up__hint">
          Don't have an account? <Link to="/sign_up">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
