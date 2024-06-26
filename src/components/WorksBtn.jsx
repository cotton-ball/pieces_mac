import PropTypes from "prop-types";
import styles from "./WorksBtn.module.css";

const WorksBtn = ({ className = "" }) => {
  return (
    <div className={[styles.worksBtn, className].join(" ")}>
      <div className={styles.btn}>
        <div className={styles.btnChild} />
        <div className={styles.btnItem} />
      </div>
      <div className={styles.works}>works</div>
    </div>
  );
};

WorksBtn.propTypes = {
  className: PropTypes.string,
};

export default WorksBtn;
