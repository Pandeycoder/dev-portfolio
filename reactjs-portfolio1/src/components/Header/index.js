// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import { HashLink as Link } from "react-router-hash-link";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Link className={styles.menu_item} smooth to="#home">
          Home
        </Link>
        <Link className={styles.menu_item} smooth to="#about">
          About
        </Link>
        <Link className={styles.menu_item} smooth to="#projects">
          Projects
        </Link>
        <Link className={styles.menu_item} smooth to="#education">
          Educations
        </Link>
        <Link className={styles.menu_item} smooth to="#contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
