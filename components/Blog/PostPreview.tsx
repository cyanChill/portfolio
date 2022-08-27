import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { BlogPostType } from "../../utils/types";

import styles from "../../styles/PostPreview.module.css";
import { postDateFormat } from "../../utils/format";
import PostInfo from "./PostInfo";

type PostPreviewProps = {
  postData: BlogPostType;
  className?: string;
  style?: object;
};

const PostPreview = ({ postData, className, style }: PostPreviewProps) => {
  const router = useRouter();

  return (
    <div className={`${styles.postCard} ${className}`} style={style}>
      <div
        className={styles.thumbnail}
        onClick={() => router.push(`/blog/${postData.slug}`)}
      >
        <Image
          src={postData.thumbnailUrl}
          alt=""
          width="200"
          height="200"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      <Link href={`/blog/${postData.slug}`}>
        <a className={styles.postTitle}>{postData.title}</a>
      </Link>

      <p className={styles.excerpt}>{postData.excerpt}</p>

      <PostInfo date={postDateFormat(postData.date)} spaceBetween />
    </div>
  );
};

export default PostPreview;
