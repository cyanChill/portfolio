/* 
  Description:
    Layout used for all pages except for the blog pages (excluding the
    /blog/preview route)
*/
import React from "react";

import useLayoutAreaContext from "../../hooks/useLayoutAreaContext";
import { ReactChildren } from "../../utils/types";

import styles from "../../styles/CameraLayout.module.css";
import CaptureCorner from "./LayoutAssets/CaptureCorner";
import BatteryIndicator from "./LayoutAssets/BatteryIndicator";
import RecordingIndicator from "./LayoutAssets/RecordingIndicator";
import PageNavControls from "../Navigation/PageNavControls";
import NavMenu from "../Navigation/NavMenu";
import CopyrightInfo from "../CopyrightInfo";

const CameraLayout = ({ children }: ReactChildren) => {
  const { contentAreaRef } = useLayoutAreaContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Outer capture frame indicators */}
        <div className={styles.outerCorner} data-position="top-left">
          <RecordingIndicator />
        </div>
        <div className={styles.outerCorner} data-position="top-right">
          <BatteryIndicator />
        </div>
        <div className={styles.outerCorner} data-position="bottom-right">
          <NavMenu />
        </div>
        <div className={styles.outerCorner} data-position="bottom-left">
          <PageNavControls />
        </div>

        <section
          className={styles.contentArea}
          style={{ "--perm-space": "0.5rem" } as React.CSSProperties}
          ref={contentAreaRef}
        >
          {/* Content Area indicator */}
          <CaptureCorner
            className="absolute"
            style={{ top: "var(--perm-space)", left: "var(--perm-space)" }}
          />
          <CaptureCorner
            rotDeg={90}
            className="absolute"
            style={{ top: "var(--perm-space)", right: "var(--perm-space)" }}
          />
          <CaptureCorner
            rotDeg={180}
            className="absolute"
            style={{ bottom: "var(--perm-space)", right: "var(--perm-space)" }}
          />
          <CaptureCorner
            rotDeg={270}
            className="absolute"
            style={{ bottom: "var(--perm-space)", left: "var(--perm-space)" }}
          />
          {children}
        </section>
      </div>

      <CopyrightInfo />
    </div>
  );
};

export default CameraLayout;
