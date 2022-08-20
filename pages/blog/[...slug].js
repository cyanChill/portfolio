import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/BlogPost.module.css";

const BlogPost = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.slug);
  }, [router]);

  return <div className={styles.wrapper}>BlogPost Page Coming Soon...</div>;
};

export default BlogPost;
