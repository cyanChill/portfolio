import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

import styles from "../../styles/BlogPreview.module.css";
import { isSimilarArrObj } from "../../utils/comparison";
import LoadingSpinner from "../../components/LoadingSpinner";
import PostPreview from "../../components/Blog/PostPreview";
import FormButton from "../../components/FormElements/FormButton";
import SEO from "../../components/Optimizations/SEO";

const BlogPreview = ({ posts: postsJSON }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(JSON.parse(postsJSON));
  }, [postsJSON]);

  // Only display page once local content is the same as fetched content
  if (!isSimilarArrObj(posts, JSON.parse(postsJSON))) {
    return <LoadingSpinner />;
  }

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
                <FormButton isLink href="/blog">
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

// Server-side code
import { getLatest3Posts } from "../../utils/services";

export const getStaticProps = async (context) => {
  const posts = await getLatest3Posts();

  // We'll try to re-generate the page at most once an hour
  return { props: { posts: JSON.stringify(posts) }, revalidate: 60 * 60 };
};
