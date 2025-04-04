export type SortDirection = "ASC" | "DESC";
export type SortKey = "width" | "price";

export interface SortOption {
  value: `${SortKey}${SortDirection}`;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { value: "widthASC", label: "Сначала узкие" },
  { value: "widthDESC", label: "Сначала широкие" },
  { value: "priceASC", label: "Сначала дешевые" },
  { value: "priceDESC", label: "Сначала дорогие" },
];
