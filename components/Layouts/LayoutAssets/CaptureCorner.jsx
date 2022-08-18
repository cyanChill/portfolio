import styles from "../../../styles/LayoutAssets.module.css";

const CaptureCorner = ({
  size = "1rem",
  thickness = "2px",
  rotDeg = 0,
  className,
  style,
}) => {
  return (
    <div
      className={`${styles.captureCorner} ${className}`}
      style={{
        "--size": size,
        "--thickness": thickness,
        transform: `rotate(${rotDeg}deg)`,
        ...style,
      }}
    />
  );
};

export default CaptureCorner;