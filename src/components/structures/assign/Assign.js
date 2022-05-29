import { useState } from "react";

import styles from "./assign.module.scss";

const Assign = ({ id, accessToken, changeAssigned }) => {
  const [assign, setAssign] = useState({
    time: null,
    date: null,
    description: null,
    timeStamp: null,
    patientId: id,
  });
  const changeForm = (event) => {
    const { value, name } = event.target;
    setAssign((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const convertDate = (date, time) => {
    let newDate = Date.parse(`${date} ${time}`) / 1000;
    setAssign((prevForm) => {
      return {
        ...prevForm,
        timeStamp: newDate,
      };
    });
    return newDate;
  };

  const sendForm = async (event) => {
    event.preventDefault();
    const newDate = Date.parse(`${assign.date} ${assign.time}`) / 1000;
    // convertDate(assign.date, assign.time);
    // console.log(assign)
    const data = {
      timeStamp: newDate,
      description: assign.description,
    };
    console.log(data);
    sendData(
      `https://2e00-178-213-240-41.eu.ngrok.io/setTimeTable/${assign.patientId}`,
      data
    );
    // send(assign.timeStamp, assign.description, assign.patientId);
    changeAssigned();
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

  const send = (timeStamp, description, patientId) => {
    sendData(
      `https://2e00-178-213-240-41.eu.ngrok.io/setTimeTable/${patientId}`,
      { timeStamp, description }
    );
  };

  return (
    <form onSubmit={sendForm}>
      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="text"
          name="time"
          placeholder="Введите время"
          value={assign.time}
          onChange={changeForm}
        />
      </div>
      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="date"
          name="date"
          placeholder="Введите дату"
          value={assign.date}
          onChange={changeForm}
        />
      </div>
      <div className={styles.input__container}>
        <textarea
          placeholder="Добавьте описание"
          name="description"
          value={assign.description}
          onChange={changeForm}
        ></textarea>
      </div>
      <button>Подтвердить</button>
    </form>
  );
};

export default Assign;
