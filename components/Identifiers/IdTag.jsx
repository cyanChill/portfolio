import Image from "next/image";

import styles from "../../styles/IdTag.module.css";

const IdTag = ({ name, image }) => {
  return (
    <div className={styles.tag}>
      <Image src={image} width="16" height="16" alt={`${name} icon`} />
      <span>{name}</span>
    </div>
  );
};

export default IdTag;
