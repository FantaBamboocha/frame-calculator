import { ConfigItem, SelectOption } from "@shared/types";

export const getMaterialOptions = (config: ConfigItem[]): SelectOption[] => {
  const baseOption = [{ value: "all", label: "Все материалы" }];

  const materialItems = config.filter(item => item.type === "material");

  return baseOption.concat(
    materialItems.map(item => ({
      value: item.key,
      label: item.name,
    })),
  );
};
