import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footer__text}>© 2022, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
