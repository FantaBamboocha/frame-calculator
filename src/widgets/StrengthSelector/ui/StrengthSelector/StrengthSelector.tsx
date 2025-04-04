import { useFormContext } from "react-hook-form";

import rawConfig from "@shared/data/config.json";
import { addOptionsToInput } from "@shared/lib/utils";
import { ConfigItem, FrameConfigItem } from "@shared/types";
import { getStrengthOptions, STRENGTH_FIELDS } from "@widgets/StrengthSelector";
import { FieldRenderer } from "@shared/ui";

export const StrengthSelector = () => {
  const { setValue } = useFormContext();
  const config = rawConfig as ConfigItem[];
  const strengthOptions = getStrengthOptions(config);

  const fieldsWithOptions = addOptionsToInput(STRENGTH_FIELDS, {
    strength: strengthOptions,
  });

  const handleStrengthChange = (value: string | number) => {
    const selected = config.find(item => item.key === value) as FrameConfigItem;
    setValue("frameData", selected);
  };
  return fieldsWithOptions.map(field => (
    <FieldRenderer
      onChange={handleStrengthChange}
      field={field}
      key={field.name}
    />
  ));
};
