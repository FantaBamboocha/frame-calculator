import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import {
  getMaterialOptions,
  SHEET_SELECTOR_FIELDS,
  getSheetOptions,
} from "../model";
import { FieldRenderer } from "@shared/ui";
import { addOptionsToInput } from "@shared/lib/utils";
import rawData from "@shared/data/data.json";
import rawConfig from "@shared/data/config.json";
import { ConfigItem, DataItem, SheetDataItem } from "@shared/types";

import styles from "./SheetSelector.module.scss";

export const SheetSelector = () => {
  const { watch, setValue } = useFormContext();
  const [material, sortOption] = watch(["material", "sortOption"]);

  const appData = rawData as DataItem[];
  const config = rawConfig as ConfigItem[];
  const materialOptions = getMaterialOptions(config);

  const sheetOptions = useMemo(
    () => getSheetOptions(material, sortOption, appData),
    [material, sortOption, appData],
  );

  const fieldsWithOptions = useMemo(() => {
    return addOptionsToInput(SHEET_SELECTOR_FIELDS, {
      material: materialOptions,
      sheet: sheetOptions,
    });
  }, [materialOptions, sheetOptions]);

  const handleSheetChange = (value: string | number) => {
    const selected = appData.find(item => item.name === value) as SheetDataItem;
    setValue("sheetData", selected);
  };

  return (
    <div className={styles.container}>
      {fieldsWithOptions.map(field => (
        <FieldRenderer
          onChange={handleSheetChange}
          field={field}
          key={field.name}
        />
      ))}
    </div>
  );
};
