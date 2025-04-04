import { ConfigItem, SelectOption } from "@shared/types";

export const getStrengthOptions = (config: ConfigItem[]): SelectOption[] => {
  const strengthItems = config.filter(item => item.type === "frame");

  return strengthItems.map(item => ({
    value: item.key,
    label: item.name,
  }));
};
