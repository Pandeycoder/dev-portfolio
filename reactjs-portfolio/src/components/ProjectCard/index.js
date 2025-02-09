// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./projectcard.module.css";
import { Icon } from "@iconify-icon/react";

function ProjectsCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img_card}>
          <img src={`/assets/img_project/${props.image}.png`} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.title_section}>
            <p>{props.title}</p>
            <div className={styles.icons}>
              {props.repo !== "" ? ( // verifica se tem um repo e renderiza ele
                <>
                  <a href={props.repo}>
                    <Icon icon={`bxl:github`} className={styles.teste} />
                  </a>
                </>
              ) : (
                ""
              )}
              {props.link !== "" ? ( // verifica se tem um link e renderiza ele
                <>
                  <span />
                  <a href={props.link}>
                    <Icon
                      icon={`material-symbols:link-rounded`}
                      className={styles.teste}
                    />
                  </a>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className={styles.desc}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
