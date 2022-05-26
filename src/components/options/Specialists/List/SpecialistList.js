import styles from "./specialists-list.module.scss";

import SpecialistItem from "../Item/SpecilistItem";

const SpecialistList = ({ specializations }) => {
  return (
    <ul className={styles.specialists__list}>
      {specializations.map((specialization) => {
        return (
          <SpecialistItem
          id={specialization.id}
          key={specialization.id}
          specialization={specialization.specialization}
            // name={specialist.specialization}
            // firstname={specialist.firstName}
            // lastname={specialist.lastName}
            // description={specialist.description}
          />
        );
      })}
    </ul>
  );
};

export default SpecialistList;
