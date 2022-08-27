import styles from "../../styles/StyledInput.module.css";

interface StyledInputProps {
  className?: string;
  type?: string;
  [x: string]: any; // For all other props
}

const StyledInput = ({ className, type, ...rest }: StyledInputProps) => {
  const inputClasses = `${styles.styledInput} ${className}`;

  if (type === "textarea") {
    return <textarea className={inputClasses} {...rest} />;
  } else {
    return <input type={type} className={inputClasses} {...rest} />;
  }
};

export default StyledInput;
