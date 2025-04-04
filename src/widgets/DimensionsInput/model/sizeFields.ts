import { FieldConfig } from "@shared/types";
import { createValidationSchema } from "./validationSchema";

export const SIZE_FIELDS = (
  validators: ReturnType<typeof createValidationSchema>,
): FieldConfig[] => [
  {
    type: "number",
    name: "width",
    label: "Ширина, м",
    placeholder: `Введите ширину (${validators.width.min.value}-${validators.width.max.value} м)`,
    validation: validators.width,
    inputProps: {
      min: validators.width.min.value,
      max: validators.width.max.value,
      step: validators.width.step ?? 0.2,
    },
  },
  {
    type: "number",
    name: "length",
    label: "Длина, м",
    placeholder: `Введите длину (${validators.length.min.value}-${validators.length.max.value} м)`,
    validation: validators.length,
    inputProps: {
      min: validators.length.min.value,
      max: validators.length.max.value,
      step: validators.length.step ?? 0.2,
    },
  },
];
