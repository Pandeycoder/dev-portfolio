// import { Link } from 'react-router-dom'
import styles from "./index.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.topo_bg} id="about">
        <div className={styles.card}>
          <About />
          <Projects />
        </div>
      </div>
      <div className={styles.linha} id="education"></div>
      <Education />
      <div className={styles.linha} id="contact"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
