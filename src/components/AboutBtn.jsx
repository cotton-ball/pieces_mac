import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./AboutBtn.module.css";

const AboutBtn = ({ className = "" }) => {
  const onAboutBtnContainerClick = useCallback(() => {
    // Please sync "about_popup" to the project
  }, []);

  return (
    <div
      className={[styles.aboutBtn, className].join(" ")}
      onClick={onAboutBtnContainerClick}
    >
      <div className={styles.btn}>
        <div className={styles.btnChild} />
        <div className={styles.btnItem} />
      </div>
      <div className={styles.about}>about</div>
    </div>
  );
};

AboutBtn.propTypes = {
  className: PropTypes.string,
};

export default AboutBtn;
