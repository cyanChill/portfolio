import styles from "../styles/LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  size?: string;
  thickness?: string;
  fullWidth?: boolean;
}

const LoadingSpinner = ({
  size,
  thickness,
  fullWidth,
}: LoadingSpinnerProps) => {
  let additionalStyles = {};
  if (size) additionalStyles["--size"] = size;
  if (thickness) additionalStyles["--thickness"] = thickness;

  if (fullWidth) {
    return (
      <div className={styles.loadingContainer}>
        <div className={`${styles.loading}`} />
      </div>
    );
  }

  return <div className={styles.loading} />;
};

export default LoadingSpinner;
