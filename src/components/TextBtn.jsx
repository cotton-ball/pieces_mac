import PropTypes from "prop-types";
import styles from "./TextBtn.module.css";

const TextBtn = ({ className = "" }) => {
  return (
    <div className={[styles.textBtn, className].join(" ")}>
      <div className={styles.btn}>
        <div className={styles.btnChild} />
        <div className={styles.btnItem} />
      </div>
      <div className={styles.text}>text</div>
    </div>
  );
};

TextBtn.propTypes = {
  className: PropTypes.string,
};

export default TextBtn;
