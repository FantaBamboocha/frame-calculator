import { SortDirection, SortKey } from "./types";
import {
  DataItem,
  MaterialKey,
  SelectOption,
  SheetDataItem,
} from "@shared/types";

export const getSheetOptions = (
  material: MaterialKey | "all",
  sortOption: `${SortKey}${SortDirection}`,
  data: DataItem[],
): SelectOption[] => {
  const filteredSheets = data.filter(
    (item): item is SheetDataItem =>
      item.type === "list" &&
      (material === undefined ||
        material === "all" ||
        item.material === material),
  );

  const sortedSheets = [...filteredSheets].sort((a, b) => {
    if (!sortOption) return 0;

    const [key, direction] = splitSortOption(sortOption);
    const modifier = direction === "ASC" ? 1 : -1;

    return (a[key] - b[key]) * modifier;
  });

  return sortedSheets.map(sheet => ({
    value: sheet.name,
    label: `${sheet.name} - ${sheet.price} руб/м2`,
  }));
};

const splitSortOption = (
  option: `${SortKey}${SortDirection}`,
): [SortKey, SortDirection] => {
  const key = option.replace(/ASC|DESC$/, "") as SortKey;
  const direction = option.slice(-3) as SortDirection;
  return [key, direction];
};
