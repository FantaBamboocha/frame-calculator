import {
  FieldErrors,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import {
  SheetSelector,
  PipeSelector,
  DimensionsInput,
  StrengthSelector,
} from "@widgets/index";
import {
  calculateOptimalSheets,
  calculatePipes,
  calculateScrews,
  calculateSheets,
} from "@features/calculator";
import { useResults } from "@shared/context";
import { ConfigItem, DataItem } from "@shared/types";
import rawConfig from "@shared/data/config.json";
import rawData from "@shared/data/data.json";

import styles from "./Calculator.module.scss";

export const Calculator = () => {
  const methods = useForm();
  const { setResults } = useResults();
  const config = rawConfig as ConfigItem[];
  const DB = rawData as DataItem[];

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const result = calculateOptimalSheets(
      data.sheetData,
      data.width,
      data.length,
    );
    const sheetResult = calculateSheets(
      data.sheetData,
      data.width,
      data.length,
      result.isRotated,
    );
    const pipeResult = calculatePipes(
      data.pipeData,
      data.frameData,
      data.width,
      data.length,
    );
    const screwResult = calculateScrews(
      data.sheetData,
      sheetResult.area,
      config,
      DB,
    );

    setResults({
      sheets: sheetResult,
      pipes: pipeResult,
      screws: screwResult,
    });
  };

  const onError = (errors: FieldErrors) => {
    const firstErrorKey = Object.keys(errors)[0];

    if (firstErrorKey) {
      alert(errors[firstErrorKey]?.message);
    }
  };
  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <SheetSelector />
          <PipeSelector />
          <DimensionsInput />
          <StrengthSelector />
          <button>Рассчитать</button>
        </form>
      </FormProvider>
    </div>
  );
};
