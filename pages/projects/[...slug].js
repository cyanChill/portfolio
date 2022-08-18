import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Project.module.css";

const Project = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.slug);
  }, [router]);

  return <div className={styles.wrapper}>Project Page</div>;
};

export default Project;
