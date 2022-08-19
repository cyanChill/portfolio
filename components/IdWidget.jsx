import Image from "next/image";

import styles from "../styles/IdWidget.module.css";

const IdWidget = ({ name, image }) => {
  return (
    <div className={styles.widget}>
      <Image src={image} width="25" height="25" alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
};

export default IdWidget;
