import { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from "../../styles/BlogPost.module.css";
import { postDateTimeFormat } from "../../utils/format";
import { customToast } from "../../utils/customToast";
import LoadingSpinner from "../../components/LoadingSpinner";
import PostInfo from "../../components/Blog/PostInfo";
import CommentForm from "../../components/Blog/CommentForm";
import Comment from "../../components/Blog/Comment";
import SEO from "../../components/Optimizations/SEO";

const BlogPost = ({ post: postJSON }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const res = await fetch(`/api/posts/${post._id}/comments`);
      const data = await res.json();
      setComments(data.comments || []);
    } catch (err) {
      customToast("error", "Something went wrong.");
    }
  };

  const submitComment = async (name, email, comment) => {
    try {
      const res = await fetch(`/api/posts/${post._id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
      });
      const data = await res.json();

      if (res.ok) setComments((prev) => [...prev, data.comment]);
      else data.errors.map((err) => customToast("error", err.message));

      return res.ok;
    } catch (err) {
      customToast("error", "Something went wrong.");
    }
  };

  useEffect(() => {
    setPost(JSON.parse(postJSON));
  }, [postJSON]);

  useEffect(() => {
    if (post && post._id) getComments();
    Prism.highlightAll();
  }, [post]); // eslint-disable-line

  // Only display page once local content is the same as fetched content
  if (!post || post._id !== JSON.parse(postJSON)._id) return <LoadingSpinner />;

  return (
    <>
      <SEO pageName={post.title} description={post.excerpt} />

      <div className={styles.container}>
        <header className={styles.blogHeader}>
          <h1>{post.title}</h1>
          <PostInfo date={postDateTimeFormat(post.date)} />
        </header>

        <div className={styles.thumbnail}>
          <Image
            src={post.thumbnailUrl}
            alt=""
            width="200"
            height="200"
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>

        <div className={styles.blogContent}>{parse(post.content)}</div>

        {/* Break between comment form */}
        <div className={styles.line} />

        <CommentForm onSubmit={submitComment} />

        <div className={styles.line} />

        {comments.length > 0 && (
          <div className={styles.commentContainer}>
            {comments.map((cmt) => (
              <Comment key={cmt._id} cmt={cmt} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;

// Server-side code
import { getPosts, getSinglePost } from "../../utils/services";

export const getStaticProps = async (context) => {
  const params = context.params;
  const post = await getSinglePost(params.slug);
  if (!post) return { notFound: true };

  // We'll try to re-generate the page at most once every 15 minutes
  return { props: { post: JSON.stringify(post) }, revalidate: 60 * 15 };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((pst) => ({ params: { slug: pst.slug } }));

  // Prerender existing paths at build-time; allows the server to render
  // paths on demand with { fallback: "blocking" }
  return { paths: paths, fallback: "blocking" };
};
