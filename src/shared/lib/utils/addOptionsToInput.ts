import { SelectOption, FieldConfig } from "@shared/types";

export const addOptionsToInput = (
  inputs: FieldConfig[],
  optionsConfig: Record<string, SelectOption[]>,
): FieldConfig[] => {
  return inputs.map(field => {
    if (!optionsConfig[field.name] || field.type !== "select") {
      return field;
    }

    const newOptions = optionsConfig[field.name];

    return {
      ...field,
      options: newOptions,
    };
  });
};
