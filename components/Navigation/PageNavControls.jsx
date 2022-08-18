import { useRouter } from "next/router";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

import styles from "../../styles/Navigation.module.css";

const PageNavControls = ({ handleNavigation }) => {
  const router = useRouter();

  // Clicking on the icon will trigger a function (in the CameraLayout element)
  // that will trigger the "closing" animation and then switch pages

  return (
    <div className={styles.navControlsContainer}>
      <IoCaretBackCircle
        className={styles.icon}
        data-disable={router.pathname === "/"}
        onClick={handleNavigation}
      />
      <span>0 / 10</span>
      <IoCaretForwardCircle
        className={styles.icon}
        data-disable={router.pathname === "contact"}
        onClick={handleNavigation}
      />
    </div>
  );
};

export default PageNavControls;
