// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./banner.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  var ocupacao =
    "I'm a fullStack Developer & working on fullStack based application more...";
  // Função de imitar máquina de escrever
  const [typewriter_text] = useTypewriter({
    words: [
      "DevOps Engineer",
      "Full-Stack Devloper",
      "AI Engineer",
      "Backend Devloper",
      "Frontend Developer",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 110,
  });

  return (
    <div className={styles.container} id="home">
      <div className={styles.text_parent}>
        <h1 className={styles.title}>
          Hello, It's Me <span className={` ${styles.title}`}>Rahul!</span>
        </h1>
        {/* Usando a função de imitar uma máquina de escrever */}
        <h3 className={`${styles.typewriter} `}>
          {" "}
          And i'm a{" "}
          <span className={`${styles.typewriter}`}>
            <span className={styles.animated_gradient}>{typewriter_text}</span>
            <Cursor cursorStyle="|" />
          </span>
        </h3>
        <h3 className={`${styles.subtitle}`}>{ocupacao}</h3>
      </div>
    </div>
  );
}

export default Banner;
