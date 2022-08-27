import styles from "../../../styles/LayoutAssets.module.css";

interface BatteryIndicatorProps {
  className?: string;
  style?: object;
}

const BatteryIndicator = ({ className, style }: BatteryIndicatorProps) => {
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
