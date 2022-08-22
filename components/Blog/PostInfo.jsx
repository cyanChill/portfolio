import Image from "next/image";

import styles from '../../styles/PostInfo.module.css'

const PostInfo = ({ date }) => {
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

      <p>{date}</p>
    </div>
  );
};

export default PostInfo;
