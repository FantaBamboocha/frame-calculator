import { useFormContext } from "react-hook-form";

import {
  PIPE_SELECTOR_FIELDS,
  getPipeOptions,
} from "@widgets/PipeSelector/model";
import { DataItem, PipeDataItem } from "@shared/types";
import rawData from "@shared/data/data.json";
import { addOptionsToInput } from "@shared/lib/utils";
import { FieldRenderer } from "@shared/ui";

export const PipeSelector = () => {
  const { setValue } = useFormContext();
  const appData = rawData as DataItem[];
  const pipeOptions = getPipeOptions(appData);
  // const { updatePipe } = useMaterials();

  const fieldsWithOptions = addOptionsToInput(PIPE_SELECTOR_FIELDS, {
    pipe: pipeOptions,
  });

  const handlePipeChange = (value: string | number) => {
    const selected = appData.find(item => item.name === value) as PipeDataItem;
    setValue("pipeData", selected);
  };

  return (
    <div>
      {fieldsWithOptions.map(field => (
        <FieldRenderer
          onChange={handlePipeChange}
          field={field}
          key={field.name}
        />
      ))}
    </div>
  );
};
