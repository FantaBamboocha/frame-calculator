import { ConfigItem } from "@shared/types";
import { FieldRenderer } from "@shared/ui";
import { SIZE_FIELDS, createValidationSchema } from "@widgets/DimensionsInput";
import rawConfig from "@shared/data/config.json";

import styles from "./DimensionsInput.module.scss";

export const DimensionsInput = () => {
  const config = rawConfig as ConfigItem[];
  const validationSchema = createValidationSchema(config);
  const sizeFields = SIZE_FIELDS(validationSchema);
  return (
    <div className={styles.container}>
      {sizeFields.map(field => (
        <FieldRenderer field={field} key={field.name} />
      ))}
    </div>
  );
};
