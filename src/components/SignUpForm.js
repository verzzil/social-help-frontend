import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = React.useState({
    firstName: null,
    lastName: null,
    age: null,
    email: null,
    password: null,
  });

  const changeForm = (event) => {
    const { value, name } = event.target;
    setSignUpForm((prevForm) => ({
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

    console.log(response);

    return await response.json();
  };

  const sendForm = (event) => {
    event.preventDefault();
    sendData("http://localhost:8080/sign_up", signUpForm);
  };

  return (
    <div className="wrapper__form">
      <div className="sign-up">
        <form onSubmit={sendForm} action="" className="sign-up__form form">
          <h1 className="form__title title">Welcome</h1>
          <div className="form__input">
            <input
              type="text"
              placeholder="Firstname"
              name="firstName"
              value={signUpForm.firstName}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={signUpForm.lastName}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={signUpForm.age}
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
              placeholder="Password"
              name="password"
              value={signUpForm.password}
              onChange={changeForm}
            />
          </div>
          <div className="form__input">
            <button type="submit">Sign up</button>
          </div>
        </form>
        <p className="sign-up__hint">
          Have an Account? <Link to="/sign_in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
