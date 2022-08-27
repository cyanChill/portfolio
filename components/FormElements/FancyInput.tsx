import React, { useState, useEffect } from "react";

import styles from "../../styles/FancyInput.module.css";

interface FancyInputProps {
  className?: string;
  labelText?: string;
  [x: string]: any; // For all other props
}

const FancyInput = ({ className, labelText, ...rest }: FancyInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!rest.value) setIsFocused(false);
    else setIsFocused(true);
  }, [rest.value]); // eslint-disable-line

  const onInputFocus = () => {
    setIsFocused(true);
  };

  const onInputUnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsFocused(false);
  };

  return (
    <div className={`${styles.fancyInput} ${className}`}>
      <input
        type="text"
        {...rest}
        onFocus={onInputFocus}
        onBlur={onInputUnFocus}
      />
      <label className={isFocused ? styles.focused : null}>{labelText}</label>
    </div>
  );
};

export default FancyInput;
