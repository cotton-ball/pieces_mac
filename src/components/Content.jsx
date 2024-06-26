import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <img
        className={styles.kayoungIcon}
        loading="lazy"
        alt=""
        src="/kayoung.svg"
      />
      <div className={styles.rhee}>
        <div className={styles.rheeInner}>
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img
              className={styles.groupIcon1}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
        <div className={styles.groupGroup}>
          <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
          <img
            className={styles.groupIcon3}
            loading="lazy"
            alt=""
            src="/group-3.svg"
          />
        </div>
        <div className={styles.rheeChild}>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
            <img
              className={styles.groupIcon5}
              loading="lazy"
              alt=""
              src="/group-5.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.groupParent1}>
            <img className={styles.groupIcon6} alt="" src="/group-6.svg" />
            <img
              className={styles.groupIcon7}
              loading="lazy"
              alt=""
              src="/group-7.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
