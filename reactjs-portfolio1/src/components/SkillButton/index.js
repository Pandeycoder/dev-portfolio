import styles from "./skillsbtn.module.css";
import { Icon } from "@iconify-icon/react";

function SkillButton(props) {
  return (
    <>
      <div className={styles.btn}>
        <Icon icon={`skill-icons:${props.icon}`} className={styles.icon} />
        {props.skill}
      </div>
    </>
  );
}

export default SkillButton;
