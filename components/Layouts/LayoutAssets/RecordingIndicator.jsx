import styles from "../../../styles/LayoutAssets.module.css";

const RecordingIndicator = ({ className, style }) => {
  return (
    <div className={`${styles.recIndicator} ${className}`} style={style}>
      <div
        className={`${styles.recCircle} ${styles.flashing}`}
        style={{ "--duration": "1.5s" }}
      />
      <span>REC</span>
    </div>
  );
};

export default RecordingIndicator;
