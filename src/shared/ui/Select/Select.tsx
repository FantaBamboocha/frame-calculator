import { useCallback, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import { ChevronIcon } from "@shared/ui";
import { SelectFieldConfig, SelectOption } from "@shared/types";

import styles from "./Select.module.scss";

export const Select = ({
  name,
  placeholder = "Выберите значение",
  options = [],
  handleChange = () => {},
}: SelectFieldConfig) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const { setValue, watch } = useFormContext();

  const selectedValue = watch(name);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const selectedLabel = selectedOption?.label || placeholder;

  const handleSelect = useCallback(
    (option: SelectOption) => {
      setValue(name, option.value);
      handleChange(option.value);
      setIsOpen(prev => !prev);
    },
    [name, setValue, handleChange],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={clsx({
            [styles.notSelected]: !selectedValue && placeholder,
          })}
        >
          {selectedLabel}
        </div>
        <div className={styles.chevronIcon}>
          <ChevronIcon direction={isOpen ? "up" : "down"} />
        </div>
      </div>

      <ul
        className={clsx(styles.optionsList, {
          [styles.hidden]: !isOpen,
        })}
      >
        {options.map(option => (
          <li
            key={option.label}
            onClick={() => handleSelect(option)}
            className={styles.option}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
