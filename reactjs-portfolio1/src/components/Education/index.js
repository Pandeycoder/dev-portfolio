import styles from "./education.module.css";
import { Chrono } from "react-chrono";
import items from "./education.data.js";

function Education() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>&lt;Education and Courses/&gt;</p>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          cardHeight="150"
          theme={{
            primary: "#b520fe",
            secondary: "black",
            cardBgColor: "white",
            cardTitleColor: "#b520fe",
            titleColor: "white",
            titleColorActive: "#b520fe",
          }}
          classNames={{
            card: styles["teste-card"],
            cardMedia: styles["my-card-media"],
            cardSubTitle: "my-card-subtitle",
            cardText: "my-card-text",
            cardTitle: styles["my-card-title"],
            title: styles["my-title"],
          }}
        />
      </div>
    </>
  );
}

export default Education;
