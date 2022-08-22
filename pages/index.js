import styles from "../styles/Home.module.css";
import SEO from "../components/Optimizations/SEO";

const Home = () => {
  return (
    <>
      <SEO />

      <div className={styles.wrapper}>
        <h1
          className="glitch-stack"
          style={{ "--stacks": 3, "--dur": "2.75s" }}
        >
          <span style={{ "--index": 1 }}>Anthony Liang</span>
          <span style={{ "--index": 2 }}>Anthony Liang</span>
          <span style={{ "--index": 3 }}>Anthony Liang</span>
        </h1>
        <h2 className="glitch-v2" data-val="Full Stack Developer">
          <span>Full Stack Developer</span>
        </h2>
      </div>
    </>
  );
};

export default Home;
