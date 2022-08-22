import { useState, useEffect } from "react";

import styles from "../../styles/BlogPreview.module.css";
import { customToast } from "../../utils/customToast";
import LoadingSpinner from "../../components/LoadingSpinner";
import PostPreview from "../../components/Blog/PostPreview";

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        if (res.ok) setPosts(data.posts || []);
        else customToast("error", "Failed to find posts.");
      } catch (err) {
        console.log("Something went wrong.");
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles.wrapper}>
      {posts.length === 0 ? (
        <div
          className={`glitch-v2 ${styles.empty}`}
          data-val="Wow it's empty! Anthony should really get into writing!"
        >
          <span>
            Wow it&apos;s empty! Anthony should really get into writing!
          </span>
        </div>
      ) : (
        <>
          <h1 className="glitch-v2" data-val="Recent Blog Posts">
            <span>Recent Blog Posts</span>
          </h1>
          <div className={styles.postsContainer}>
            {posts.map((pst) => (
              <PostPreview key={pst._id} postData={pst} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPreview;
