// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./skills.module.css";
import SkillButton from "../SkillButton";

function Skills() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}># Habilidades</span>
        <div className={styles.group}>
          <SkillButton icon="c" skill="C" />
          <SkillButton icon="css" skill="CSS" />
          <SkillButton icon="github-dark" skill="GitHub" />
          <SkillButton icon="html" skill="HTML" />
          <SkillButton icon="javascript" skill="Javascript" />
          <SkillButton icon="mysql-dark" skill="MySQL" />
          <SkillButton icon="nodejs-dark" skill="NodeJS" />
          <SkillButton icon="notion-dark" skill="Notion" />
          <SkillButton icon="npm-dark" skill="Npm" />
          <SkillButton icon="php-dark" skill="PHP" />
          <SkillButton icon="python-dark" skill="Python" />
          <SkillButton icon="react-dark" skill="React" />
          <SkillButton icon="vercel-light" skill="Vercel" />
          <SkillButton icon="vscode-dark" skill="Vscode" />
        </div>
      </div>
    </>
  );
}

export default Skills;
