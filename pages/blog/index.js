import { useState, useEffect } from "react";

import styles from "../../styles/Blog.module.css";
import PostPreview from "../../components/Blog/PostPreview";
import LoadingSpinner from "../../components/LoadingSpinner";

const Blog = ({ posts: postsJSON }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setPosts(JSON.parse(postsJSON));
  }, [postsJSON]);

  if (!posts) return <LoadingSpinner />;

  return (
    <div className={styles.wrapper}>
      {posts.map((post, idx) => (
        <PostPreview
          key={post._id}
          postData={post}
          className="appear-anim"
          style={{ "--delay": `${(idx + 1) * 500}ms`, opacity: 0 }}
        />
      ))}
    </div>
  );
};

export default Blog;

// Server-side code
import { getPosts } from "../../utils/services";

export const getStaticProps = async (context) => {
  const posts = await getPosts();
  // We'll try to re-generate the page at most once an hour
  return { props: { posts: JSON.stringify(posts) }, revalidate: 60 * 60 };
};
