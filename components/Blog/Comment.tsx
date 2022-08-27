import { BlogCommentType } from "../../utils/types";

import styles from "../../styles/Comment.module.css";
import { postDateTimeFormat } from "../../utils/format";

type CommentProps = {
  cmt: BlogCommentType;
  className?: string;
  [x: string]: any; // For all other props
};

const Comment = ({ cmt, className, ...rest }: CommentProps) => {
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
