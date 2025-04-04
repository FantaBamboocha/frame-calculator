import { MaterialKey } from "@shared/types";

export interface SheetDataItem {
  type: "list";
  name: string;
  material: MaterialKey;
  width: number;
  price: number;
  unit: "м2";
}

export interface PipeDataItem {
  type: "pipe";
  name: string;
  width: number;
  price: number;
  unit: "мм";
}

export interface FixDataItem {
  type: "fix";
  name: string;
  unit: "шт";
  price: number;
}

export type DataItem = SheetDataItem | PipeDataItem | FixDataItem;
