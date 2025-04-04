import { ConfigItem, SizeConfigItem, SizeKey } from "@shared/types";

export const createValidationSchema = (config: ConfigItem[]) => {
  const getLimit = (fieldName: SizeKey) => {
    return config.find(
      (item): item is SizeConfigItem =>
        item.type === "size" && item.key === fieldName,
    );
  };

  const width = getLimit("width");
  const length = getLimit("length");

  return {
    width: {
      required: "Необходимо указать ширину",
      min: {
        value: width?.min ?? 5,
        message: `Минимальная ширина: ${width?.min ?? 5} м`,
      },
      max: {
        value: width?.max ?? 25,
        message: `Максимальная ширина: ${width?.max ?? 25} м`,
      },
      step: width?.step,
    },
    length: {
      required: "Необходимо указать длину",
      min: {
        value: length?.min ?? 5,
        message: `Минимальная длина: ${length?.min ?? 5} м`,
      },
      max: {
        value: length?.max ?? 50,
        message: `Максимальная длина: ${length?.max ?? 50} м`,
      },
      step: length?.step,
    },
  };
};
