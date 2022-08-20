import Image from "next/image";

import styles from "../../styles/IdWidget.module.css";

const IdWidget = ({ name, image }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.imgContainer}>
        <Image
          src={image}
          width="32"
          height="32"
          layout="responsive"
          alt={`${name} icon`}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default IdWidget;
