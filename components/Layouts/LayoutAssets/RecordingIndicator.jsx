import styles from "../../../styles/LayoutAssets.module.css";

const RecordingIndicator = ({ className, style }) => {
  return (
    <div className={`${styles.recIndicator} ${className}`} style={style}>
      <div
        className={`${styles.recCircle} ${styles.flashing}`}
        style={{ "--duration": "1.5s" }}
      />
      <span
        className="glitch-v2"
        data-val="REC"
        style={{ "--ff": "var(--font-family-sans)", "--dur": "1s" }}
      >
        <span>REC</span>
      </span>
    </div>
  );
};

export default RecordingIndicator;
