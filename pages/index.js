import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className="stack" style={{ "--stacks": 3, "--dur": "2.75s" }}>
        <span style={{ "--index": 1 }}>Anthony Liang</span>
        <span style={{ "--index": 2 }}>Anthony Liang</span>
        <span style={{ "--index": 3 }}>Anthony Liang</span>
      </h1>
      <h2
        className="stack"
        style={{ "--stacks": 3, "--init-dur": "250ms", "--delay": "3s" }}
      >
        <span style={{ "--index": 1 }}>Full Stack Developer</span>
        <span style={{ "--index": 2 }}>Full Stack Developer</span>
        <span style={{ "--index": 3 }}>Full Stack Developer</span>
      </h2>
    </div>
  );
};

export default Home;
