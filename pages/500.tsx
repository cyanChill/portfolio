import React from "react";
import useLayoutAreaContext from "../hooks/useLayoutAreaContext";

import styles from "../styles/Error.module.css";
import SEO from "../components/Optimizations/SEO";

const Error500Page = () => {
  const { changeView } = useLayoutAreaContext();

  return (
    <>
      <SEO
        title="500"
        pageName="Error"
        description="Something went wrong on the server."
      />

      <div className={styles.wrapper}>
        <h1
          className="glitch-stack"
          style={{ "--stacks": 3, "--dur": "2.75s" } as React.CSSProperties}
        >
          <span style={{ "--index": 1 } as React.CSSProperties}>
            Lost in the Matrix
          </span>
          <span style={{ "--index": 2 } as React.CSSProperties}>
            Lost in the Matrix
          </span>
          <span style={{ "--index": 3 } as React.CSSProperties}>
            Lost in the Matrix
          </span>
        </h1>
        <p className={styles.errMsg}>
          <strong>500:</strong> A server-side error has occurred.{" "}
          <span onClick={() => changeView("/")}>Click here to go home.</span>
        </p>
      </div>
    </>
  );
};

export default Error500Page;
