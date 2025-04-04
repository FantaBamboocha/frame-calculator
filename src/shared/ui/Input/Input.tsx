import { useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import { TextFieldConfig } from "@shared/types";
import styles from "./Input.module.scss";

export const Input = ({ name, placeholder, inputProps }: TextFieldConfig) => {
  const { register, watch } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const value = watch(name);

  return (
    <div className={styles.inputContainer}>
      <div className={styles.input}>
        <input
          {...register(name)}
          {...inputProps}
          type="number"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={clsx({ [styles.inputFocused]: isFocused || value })}
        />
        <label className={clsx({ [styles.shrinkLabel]: isFocused || value })}>
          {placeholder}
        </label>
      </div>
    </div>
  );
};
