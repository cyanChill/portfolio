import useLayoutAreaContext from "../../hooks/useLayoutAreaContext";

import styles from "../../styles/Project.module.css";
import { projectsData } from "../../data";

const Project = () => {
  const { changeView } = useLayoutAreaContext();

  return (
    <div className={styles.wrapper}>
      <h1
        className={`glitch-v2 ${styles.pgTitle}`}
        data-val="Project Quick Navigation"
      >
        <span>Project Quick Navigation</span>
      </h1>

      <div className={styles.projContainer}>
        {Object.keys(projectsData).map((projName) => (
          <div
            className={styles.projCard}
            key={projName}
            onClick={() => changeView(`/projects/${projName}`)}
          >
            <h2>{projectsData[projName].title}</h2>
            <p>{projectsData[projName].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
