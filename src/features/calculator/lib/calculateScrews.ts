import {
  ConfigItem,
  DataItem,
  FixConfigItem,
  SheetDataItem,
} from "@shared/types";

export const calculateScrews = (
  sheetData: SheetDataItem,
  area: number,
  config: ConfigItem[],
  data: DataItem[],
) => {
  const screwConfig = config.find(
    (item): item is FixConfigItem =>
      item.type === "fix" && item.key === sheetData.material,
  );

  if (!screwConfig) return { count: 0, totalPrice: 0 };

  const screwCountPerSqM = screwConfig.value;
  const totalScrews = Math.ceil(area * screwCountPerSqM);

  const screwPriceItem = data.find(
    item => item.type === "fix" && item.name === "Саморез",
  );
  const screwPrice = screwPriceItem ? screwPriceItem.price : 0;

  return {
    count: totalScrews,
    totalPrice: totalScrews * screwPrice,
  };
};
