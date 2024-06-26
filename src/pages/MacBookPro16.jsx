import Content from "../components/Content";
import AboutBtn from "../components/AboutBtn";
import WorksBtn from "../components/WorksBtn";
import TextBtn from "../components/TextBtn";
import styles from "./MacBookPro16.module.css";

const MacBookPro16 = () => {
  return (
    <div className={styles.macbookPro1613}>
      <Content />
      <div className={styles.navigation}>
        <div className={styles.buttons}>
          <AboutBtn />
          <WorksBtn />
          <TextBtn />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro16;
