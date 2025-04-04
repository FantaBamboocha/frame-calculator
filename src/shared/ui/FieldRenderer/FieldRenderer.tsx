import {
  Controller,
  ControllerRenderProps,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Input, Select } from "@shared/ui";
import { SelectOption } from "@shared/types";

import styles from "./FieldRenderer.module.scss";

interface FieldRendererProps {
  field: {
    name: string;
    label: string;
    type: "number" | "select";
    validation?: RegisterOptions;
    inputProps?: {
      min?: number;
      max?: number;
      step?: number;
    };
    options?: SelectOption[];
    placeholder?: string;
  };
  onChange?: (value: SelectOption["value"]) => void;
}

const FieldWrapper = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className={styles.fieldWrapper}>
    <p className={styles.label}>{label}</p>
    {children}
  </div>
);

export const FieldRenderer = ({ field, onChange }: FieldRendererProps) => {
  const { control } = useFormContext();

  const fieldToRender = (controllerField: ControllerRenderProps) => {
    switch (field.type) {
      case "number":
        return (
          <Input
            type="number"
            label={field.label}
            placeholder={field.placeholder || ""}
            inputProps={field.inputProps}
            {...controllerField}
          />
        );
      case "select":
        return (
          <Select
            type="select"
            options={field.options || []}
            label={field.label}
            placeholder={field.placeholder || ""}
            handleChange={onChange}
            {...controllerField}
          />
        );
      default:
        console.error("Неподдерживаемый тип поля");
        return null;
    }
  };

  return (
    <Controller
      control={control}
      name={field.name}
      rules={field.validation || {}}
      render={({ field: controllerField }) => (
        <FieldWrapper label={field.label}>
          {fieldToRender(controllerField)}
        </FieldWrapper>
      )}
    />
  );
};
