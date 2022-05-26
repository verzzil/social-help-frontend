import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Doctors from "../../structures/Doctors/Doctors";

import "./../../../styles/index.scss";
import styles from "./styles/doctors-page.module.scss";

const DoctorPage = () => {
  const [doctors, setDoctors] = useState(null);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    const getSpecialists = async () => {
      await fetch(`http://localhost/authentication/specialization/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setDoctors([result]);
        });
    };
    getSpecialists();
  }, []);
  return (
    <div className={styles.wrapper}>
      {doctors && <Doctors doctors={doctors[0]} />}
    </div>
  );
};

export default DoctorPage;
