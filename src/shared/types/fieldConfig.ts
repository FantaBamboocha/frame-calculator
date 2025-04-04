import { RegisterOptions } from "react-hook-form";
import { SelectOption } from "./selectOption";

interface BaseFieldConfig {
  name: string;
  label: string;
  type: "number" | "select";
  placeholder: string;
  validation?: RegisterOptions;
}

export interface TextFieldConfig extends BaseFieldConfig {
  inputProps?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface SelectFieldConfig extends BaseFieldConfig {
  options: SelectOption[];
  handleChange?: (value: SelectOption["value"]) => void;
}

export type FieldConfig = TextFieldConfig | SelectFieldConfig;
