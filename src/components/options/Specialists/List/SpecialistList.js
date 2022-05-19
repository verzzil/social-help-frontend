import styles from "./specialists-list.module.scss";

import SpecialistItem from "../Item/SpecilistItem";

const SpecialistList = ({ specialists }) => {
  return (
    <ul className={styles.specialists__list}>
      {specialists.map((specialist) => {
        return (
          <SpecialistItem
            name={specialist.name}
            description={specialist.description}
          />
        );
      })}
    </ul>
  );
};

export default SpecialistList;
