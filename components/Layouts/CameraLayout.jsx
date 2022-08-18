// Layout used for all other pages
import { useRef } from "react";

import styles from "../../styles/CameraLayout.module.css";
import CaptureCorner from "./LayoutAssets/CaptureCorner";
import BatteryIndicator from "./LayoutAssets/BatteryIndicator";
import RecordingIndicator from "./LayoutAssets/RecordingIndicator";
import PageNavControls from "../Navigation/PageNavControls";
import NavMenu from "../Navigation/NavMenu";

const CameraLayout = ({ children }) => {
  const contentAreaRef = useRef(null);

  const handleNavigation = () => {
    console.log("Going to next page...");

    contentAreaRef.current.classList.add(styles.close);
  };

  return (
    <div className={styles.container}>
      {/* Outer capture frame indicators */}
      <div
        className={styles.outerCorner}
        style={{ gridArea: "1 / 1 / 2 / 2" }}
        data-position="top-left"
      >
        <RecordingIndicator />
      </div>
      <div
        className={styles.outerCorner}
        style={{ gridArea: "1 / 3 / 2 / 4" }}
        data-position="top-right"
      >
        <BatteryIndicator />
      </div>
      <div
        className={styles.outerCorner}
        style={{ gridArea: "3 / 3 / 4 / 4" }}
        data-position="bottom-right"
      >
        <NavMenu handleNavigation={handleNavigation} />
      </div>
      <div
        className={styles.outerCorner}
        style={{ gridArea: "3 / 1 / 4 / 2" }}
        data-position="bottom-left"
      >
        <PageNavControls handleNavigation={handleNavigation} />
      </div>

      <section
        className={styles.contentArea}
        style={{ "--perm-space": "0.5rem" }}
        ref={contentAreaRef}
      >
        {/* Content Area indicator */}
        <CaptureCorner
          size="3rem"
          thickness="3px"
          className="absolute"
          style={{ top: "var(--perm-space)", left: "var(--perm-space)" }}
        />
        <CaptureCorner
          size="3rem"
          thickness="3px"
          rotDeg={90}
          className="absolute"
          style={{ top: "var(--perm-space)", right: "var(--perm-space)" }}
        />
        <CaptureCorner
          size="3rem"
          thickness="3px"
          rotDeg={180}
          className="absolute"
          style={{ bottom: "var(--perm-space)", right: "var(--perm-space)" }}
        />
        <CaptureCorner
          size="3rem"
          thickness="3px"
          rotDeg={270}
          className="absolute"
          style={{ bottom: "var(--perm-space)", left: "var(--perm-space)" }}
        />
        {children}
      </section>
    </div>
  );
};

export default CameraLayout;
