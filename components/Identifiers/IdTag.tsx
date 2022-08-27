import Image from "next/image";

import styles from "../../styles/Identifiers.module.css";

type IdTagProps = {
  name: string;
  image: string;
};

const IdTag = ({ name, image }: IdTagProps) => {
  return (
    <div className={styles.tag}>
      <Image src={image} width="16" height="16" alt={`${name} icon`} />
      <span>{name}</span>
    </div>
  );
};

export default IdTag;
