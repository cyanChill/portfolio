import Image from "next/image";

import styles from "../../styles/PostInfo.module.css";

interface PostInfoProps {
  date: string;
  spaceBetween?: boolean;
}

const PostInfo = ({ date, spaceBetween }: PostInfoProps) => {
  return (
    <div className={styles.postInfo}>
      <div className={styles.profilePic}>
        <Image
          src="/images/profile_picture.webp"
          alt=""
          width="256"
          height="256"
          priority
        />
      </div>
      <span>Anthony Liang</span>

      <p className={spaceBetween ? styles.spaceBetween : null}>{date}</p>
    </div>
  );
};

export default PostInfo;
