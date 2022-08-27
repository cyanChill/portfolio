import React from "react";

import styles from "../../styles/FormButton.module.css";

type FormButtonProps = {
  isLink?: boolean;
  altBdr?: boolean;
  className?: string;
  children: React.ReactNode;
  [x: string]: any; // For all other props
};

const FormButton = ({
  isLink,
  altBdr,
  className,
  children,
  ...rest
}: FormButtonProps) => {
  if (isLink) {
    return (
      <a
        className={`${styles.btn} ${className} ${altBdr && styles.altBdr}`}
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`${styles.btn} ${className} ${altBdr && styles.altBdr}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export default FormButton;
