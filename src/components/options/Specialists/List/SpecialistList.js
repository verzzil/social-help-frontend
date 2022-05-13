import styles from "./specialists-list.module.scss";

import SpecialistItem from "../Item/SpecilistItem";

const SpecialistList = () => {
  return (
    <ul className={styles.specialists__list}>
      <SpecialistItem />
      <SpecialistItem />
      <SpecialistItem />
      <SpecialistItem />
      <SpecialistItem />
      <SpecialistItem />
      <SpecialistItem />
    </ul>
  );
};

export default SpecialistList;
