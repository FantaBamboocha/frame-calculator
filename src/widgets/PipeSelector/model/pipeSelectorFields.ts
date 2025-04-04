import { FieldConfig } from "@shared/types";

export const PIPE_SELECTOR_FIELDS: FieldConfig[] = [
  {
    type: "select",
    name: "pipe",
    label: "Труба",
    options: [],
    placeholder: "Выберите трубу",
    validation: {
      required: "Выберите трубу",
    },
  },
];
