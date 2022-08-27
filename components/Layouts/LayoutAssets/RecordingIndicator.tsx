import React from "react";

import styles from "../../../styles/LayoutAssets.module.css";

interface RecordingIndicatorProps {
  className?: string;
  style?: object;
}

const RecordingIndicator = ({ className, style }: RecordingIndicatorProps) => {
  return (
    <div className={`${styles.recIndicator} ${className}`} style={style}>
      <div
        className={`${styles.recCircle} ${styles.flashing}`}
        style={{ "--duration": "1.5s" } as React.CSSProperties}
      />
      <span
        className="glitch-v2"
        data-val="REC"
        style={
          {
            "--ff": "var(--font-family-sans)",
            "--dur": "1s",
          } as React.CSSProperties
        }
      >
        <span>REC</span>
      </span>
    </div>
  );
};

export default RecordingIndicator;
