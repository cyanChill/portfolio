import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";

import styles from "../../styles/BlogPreview.module.css";
import { customToast } from "../../utils/customToast";
import LoadingSpinner from "../../components/LoadingSpinner";
import PostPreview from "../../components/Blog/PostPreview";
import FormButton from "../../components/FormElements/FormButton";
import SEO from "../../components/Optimizations/SEO";

const BlogPreview = () => {
  const router = useRouter();

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        if (res.ok) setPosts(data.posts);
        else throw Error("Something went wrong.");
      } catch (err) {
        customToast(
          "error",
          "Something went wrong when fetching latest posts."
        );
      }
    };

    getPosts();
  }, []);

  if (!posts) return <LoadingSpinner />;

  return (
    <>
      <SEO
        pageName="Recent Blog Posts"
        description="A list of the 3 latest blog posts I've made."
      />

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
            <div className={styles.header}>
              <h1 className="glitch-v2" data-val="Recent Blog Posts">
                <span>Recent Blog Posts</span>
              </h1>

              <div className={styles.action}>
                <FormButton onClick={() => router.push("/blog")}>
                  <span className={styles.more}>
                    See all blog posts <FiExternalLink />
                  </span>
                </FormButton>
              </div>
            </div>

            <div className={styles.postsContainer}>
              {posts.map((pst, idx) => (
                <PostPreview
                  key={pst._id}
                  postData={pst}
                  className="appear-anim"
                  style={{ "--delay": `${(idx + 1) * 500}ms`, opacity: 0 }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogPreview;
