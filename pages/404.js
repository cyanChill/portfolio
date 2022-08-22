import useLayoutAreaContext from "../hooks/useLayoutAreaContext";

import styles from "../styles/Error.module.css";
import SEO from "../components/Optimizations/SEO";

const Error404Page = () => {
  const { changeView } = useLayoutAreaContext();

  return (
    <>
      <SEO
        title="404"
        pageName="Error"
        description="That resource was not found."
      />

      <div className={styles.wrapper}>
        <h1
          className="glitch-stack"
          style={{ "--stacks": 3, "--dur": "2.75s" }}
        >
          <span style={{ "--index": 1 }}>Signal Lost</span>
          <span style={{ "--index": 2 }}>Signal Lost</span>
          <span style={{ "--index": 3 }}>Signal Lost</span>
        </h1>
        <p className={styles.errMsg}>
          <strong>404:</strong> The page you were looking for was not found.{" "}
          <span onClick={() => changeView("/")}>Click here to go home.</span>
        </p>
      </div>
    </>
  );
};

export default Error404Page;
