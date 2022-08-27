import React from "react";

import styles from "../../../styles/LayoutAssets.module.css";

type CaptureCornerProps = {
  size?: string;
  thickness?: string;
  rotDeg?: number;
  className?: string;
  style?: object;
};

const CaptureCorner = ({
  size = "3rem",
  thickness = "3px",
  rotDeg = 0,
  className,
  style,
}: CaptureCornerProps) => {
  return (
    <div
      className={`${styles.captureCorner} ${className}`}
      style={
        {
          "--size": size,
          "--thickness": thickness,
          transform: `rotate(${rotDeg}deg)`,
          ...style,
        } as React.CSSProperties
      }
    />
  );
};

export default CaptureCorner;
