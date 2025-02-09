// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./project.module.css";
import ProjectsCard from "../ProjectCard";

function Projects() {
  return (
    <>
      <div id="projects" className={styles.anchor}></div>

      <div className={styles.container}>
        <div className={styles.title_section}>
          <h1 className={styles.title}>&lt;Projects/&gt;</h1>
          <span />
        </div>

        <div className={styles.card_container}>
          <ProjectsCard
            title="Portfolio"
            image="banner"
            desc="Personal website created with React using CRA, aimed at improving my React skills and showcasing my current projects, qualifications, skills, etc."
            repo="https://github.com/pandeycoder/react-portfolio"
            link="https://pandeycoder.vercel.app/"
          />
          <ProjectsCard
            title="QR Code Generator"
            image="banner"
            desc="Website built to practice API usage, utilizing a QR Code generation API directly in the browser, allowing users to choose their desired parameters."
            repo="https://github.com/pandeycoder/react-portfolio"
            link="https://pandeycoder.vercel.app/"
          />
          <ProjectsCard
            title="Studio Ao Quadrado"
            image="banner"
            desc="Website developed as a final project for the Systems Development course to facilitate communication between clients and interior designers."
            repo="https://github.com/pandeycoder/react-portfolio"
            link=""
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
