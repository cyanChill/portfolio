import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/Project.module.css";
import { projectsData, technologiesObj } from "../../data";
import IdTag from "../../components/Identifiers/IdTag";
import FormButton from "../../components/FormElements/FormButton";

const Project = () => {
  const router = useRouter();

  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    if (router.query.slug && router.query.slug[0]) {
      setProjectInfo(projectsData[router.query.slug[0]]);
    }
  }, [router]);

  if (!projectInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`${styles.wrapper} ${projectInfo.reverse && styles.reverse}`}
    >
      <h1
        className={`glitch-v2 ${styles.pgTitle}`}
        data-val={`Project: ${projectInfo.title}`}
      >
        <span>Project: {projectInfo.title}</span>
      </h1>

      <div className={styles.imgContainer}>
        <div className={styles.wideImg}>
          <Image
            className={styles.wideImg}
            src={projectInfo.thumbnail.wide}
            width="500"
            height="200"
            layout="responsive"
            alt=""
            priority
          />
        </div>

        <div className={styles.verticalImg}>
          <Image
            className={styles.roundedImg}
            src={projectInfo.thumbnail.vertical1}
            layout="fill"
            objectFit="contain"
            alt=""
            priority
          />
        </div>

        <div className={styles.verticalImg}>
          <Image
            className={styles.roundedImg}
            src={projectInfo.thumbnail.vertical2}
            layout="fill"
            objectFit="contain"
            alt=""
            priority
          />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.tagContainer}>
          {projectInfo.tags &&
            projectInfo.tags.map((tagname) => (
              <IdTag
                key={tagname}
                name={tagname}
                image={technologiesObj[tagname]}
              />
            ))}
        </div>

        <p className={styles.description}>{projectInfo.description}</p>

        <div className={styles.action}>
          {projectInfo.links.github && (
            <FormButton
              isLink
              href={projectInfo.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
            </FormButton>
          )}

          {projectInfo.links.live && (
            <FormButton
              isLink
              altBdr
              href={projectInfo.links.live}
              target="_blank"
              rel="noreferrer"
              style={{
                "--btn-theme": "hsl(var(--black-700))",
                "--btn-alt-theme": "hsl(var(--purple-50))",
              }}
            >
              <span>Live</span>
            </FormButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
