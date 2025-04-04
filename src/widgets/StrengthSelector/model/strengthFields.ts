import { FieldConfig } from "@shared/types";

export const STRENGTH_FIELDS: FieldConfig[] = [
  {
    type: "select",
    name: "strength",
    label: "Прочность",
    options: [],
    placeholder: "Выберите прочность",
    validation: {
      required: "Выберите прочность",
    },
  },
];
