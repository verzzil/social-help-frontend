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
    password: null,
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
    sendData("http://localhost/authentication/sign_up", signUpForm);
    changeValidate();
  };

  return (
    <div className="wrapper">
      {!patient && !doctor && (
        <div className="option">
          <h1 className="option__title">Who you are?</h1>
          <div className="option__links">
            <div className="option__link option__link_patient">
              <button onClick={changePatient}>Patient</button>
            </div>
            <div className="option__link option__link_doctor">
              <button onClick={changeDoctor}>Doctor</button>
            </div>
          </div>
        </div>
      )}

      {doctor && (
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
                type="text"
                placeholder="Patronymic"
                name="patronymic"
                value={signUpForm.patronymic}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="date"
                placeholder="Birthday"
                name="birthday"
                value={signUpForm.birthday}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={signUpForm.city}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                value={signUpForm.gender}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <textarea
                placeholder="Qualification"
                name="qualification"
                value={signUpForm.qualification}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <textarea
                placeholder="Education"
                name="education"
                value={signUpForm.education}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <textarea
                placeholder="Qualification improvement"
                name="qualification_improvement"
                value={signUpForm.qualification_improvement}
                onChange={changeForm}
              ></textarea>
            </div>
            <div className="form__input">
              <input
                type="number"
                placeholder="Experience"
                name="experience"
                value={signUpForm.experience}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Specialization"
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
      )}

      {patient && (
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
                type="text"
                placeholder="Patronymic"
                name="patronymic"
                value={signUpForm.patronymic}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="date"
                placeholder="Birthday"
                name="birthday"
                value={signUpForm.birthday}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={signUpForm.city}
                onChange={changeForm}
              />
            </div>
            <div className="form__input">
              <input
                type="text"
                placeholder="Gender"
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
      )}
    </div>
  );
};

export default SignUpForm;
