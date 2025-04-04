import { MaterialKey } from "./configItem";

export interface PipeFormDataItem {
  name: string;
  width: number;
  price: number;
}

export interface SheetFormDataItem extends PipeFormDataItem {
  material: MaterialKey;
}

export interface SelectOption {
  value: string | number;
  label: string;
}
