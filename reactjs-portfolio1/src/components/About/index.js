import styles from "./about.module.css";
import Skills from "../Skills";

function About() {
  return (
    <>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;About Me/&gt;</h1>
        <span />
      </div>
      <div className={styles.content}>
        <div className={styles.text_section}>
          <p className={styles.about_text}>
            Since 2020, I have been in the development field after completing a
            Systems Development course. Throughout this period, I have defined
            my professional path in the IT sector, developing an interest in
            tools such as Artificial Intelligence, Web Development, Design, Game
            Creation, and more. My passion for innovation and continuous
            learning is essential in my journey, driving me to explore new
            possibilities and constantly improve my skills.
          </p>
          <p className={styles.about_text2}>
            I am currently studying Systems Analysis and Development at Fatec
            Arthur Azevedo, Mogi Mirim. I am looking for a job or internship
            opportunity in the development field.
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
