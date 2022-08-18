import styles from "../../../styles/LayoutAssets.module.css";

const BatteryIndicator = ({ className, style }) => {
  return (
    <div className={`${styles.batteryIndicator} ${className}`} style={style}>
      <div className={styles.batteryTerminal} />
      <div className={styles.batteryContainer}>
        <div className={`${styles.batteryBar} ${styles.flashing}`} />
        <div className={styles.batteryBar} />
        <div className={styles.batteryBar} />
      </div>
    </div>
  );
};

export default BatteryIndicator;
