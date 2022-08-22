import styles from "../../styles/Comment.module.css";
import { postDateTimeFormat } from "../../utils/format";

const Comment = ({ cmt, className, ...rest }) => {
  return (
    <div className={`${styles.comment} ${className}`} {...rest}>
      <p>
        {cmt.name}{" "}
        <span className={styles.date}>[{postDateTimeFormat(cmt.date)}]</span>
      </p>
      <p className={styles.commentContent}>{cmt.comment}</p>
    </div>
  );
};

export default Comment;
