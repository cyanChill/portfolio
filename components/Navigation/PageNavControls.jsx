import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

import useNavigationContext from "../../hooks/useNavigationContext";
import useLayoutAreaContext from "../../hooks/useLayoutAreaContext";

import styles from "../../styles/Navigation.module.css";

const PageNavControls = () => {
  const { idx, numPages } = useNavigationContext();
  const { changeView, loading } = useLayoutAreaContext();

  // Clicking on the icon will trigger a function (in the CameraLayout element)
  // that will trigger the "closing" animation and then switch pages
  const updateView = (increment) => {
    changeView(null, idx + increment);
  };

  return (
    <div className={styles.navControlsContainer}>
      <IoCaretBackCircle
        className={styles.icon}
        data-disable={loading || idx === 0 || !idx}
        onClick={() => updateView(-1)}
      />
      <span>
        {idx} / {numPages - 1}
      </span>
      <IoCaretForwardCircle
        className={styles.icon}
        data-disable={loading || idx === numPages - 1 || !idx}
        onClick={() => updateView(1)}
      />
    </div>
  );
};

export default PageNavControls;
