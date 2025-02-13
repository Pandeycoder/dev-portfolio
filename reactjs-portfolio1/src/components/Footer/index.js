import styles from "./footer.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <div className={styles.nav_items}>
            <p className={styles.title_col}>Hindi</p>
            <ul>
              <li>
                <Link smooth to="#home" className={styles.nav_links}>
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="#about" className={styles.nav_links}>
                  about
                </Link>
              </li>
              <li>
                <Link smooth to="#projects" className={styles.nav_links}>
                  Projects
                </Link>
              </li>
              <li>
                <Link smooth to="#education" className={styles.nav_links}>
                  Education
                </Link>
              </li>
              <li>
                <Link smooth to="#contact" className={styles.nav_links}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right_side}>
          <div className={styles.links}>
            <p className={styles.title_col}>Links</p>
            <ul>
              <a target="blank" href="https://linkedin.com/in/rahul/">
                <li>LinkedIn</li>
              </a>
              <a target="blank" href="https://github.com/rahul">
                <li>Github</li>
              </a>
              <a target="blank" href="https://instagram.com/rahul/">
                <li>Instagram</li>
              </a>
              <a href="a">
                <li>Email</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <span className={styles.line} />
        <p>Made with ❤️ by Rahul :)</p>
      </div>
    </>
  );
}

export default Footer;
