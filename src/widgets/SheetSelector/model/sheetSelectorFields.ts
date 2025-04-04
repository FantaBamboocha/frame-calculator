import { FieldConfig } from "@shared/types/fieldConfig";
import { SORT_OPTIONS } from "./types";

export const SHEET_SELECTOR_FIELDS: FieldConfig[] = [
  {
    type: "select",
    name: "material",
    label: "Материал листа",
    options: [],
    placeholder: "Выберите материал",
  },
  {
    type: "select",
    name: "sortOption",
    label: "Сортировка листов",
    options: SORT_OPTIONS,
    placeholder: "Выберите параметр",
  },
  {
    type: "select",
    name: "sheet",
    label: "Лист",
    placeholder: "Выберите лист",
    options: [],
    validation: {
      required: "Выберите лист",
    },
  },
];
