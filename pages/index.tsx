import React from "react";

import styles from "../styles/Home.module.css";
import SEO from "../components/Optimizations/SEO";

const Home = () => {
  return (
    <>
      <SEO />

      <div className={styles.wrapper}>
        <h1
          className="glitch-stack"
          style={{ "--stacks": 3, "--dur": "2.75s" } as React.CSSProperties}
        >
          <span style={{ "--index": 1 } as React.CSSProperties}>
            Anthony Liang
          </span>
          <span style={{ "--index": 2 } as React.CSSProperties}>
            Anthony Liang
          </span>
          <span style={{ "--index": 3 } as React.CSSProperties}>
            Anthony Liang
          </span>
        </h1>
        <h2 className="glitch-v2" data-val="Full Stack Developer">
          <span>Full Stack Developer</span>
        </h2>
      </div>
    </>
  );
};

export default Home;
