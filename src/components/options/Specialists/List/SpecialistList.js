import styles from "./specialists-list.module.scss";

import SpecialistItem from "../Item/SpecilistItem";

const SpecialistList = ({ specialists }) => {
  return (
    <ul className={styles.specialists__list}>
      {specialists.map((specialist) => {
        return (
          <SpecialistItem
            name={specialist.specialization}
            firstname={specialist.firstName}
            lastname={specialist.lastName}
<<<<<<< HEAD
            // description={specialist.description}
=======
>>>>>>> 947a7ed0aaee3bb526d29ef8249e0bde3c1465da
          />
        );
      })}
    </ul>
  );
};

export default SpecialistList;
