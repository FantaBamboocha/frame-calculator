import { DataItem, PipeDataItem } from "@shared/types";

export const getPipeOptions = (data: DataItem[]) => {
  const filteredPipes = data.filter(
    (item): item is PipeDataItem => item.type === "pipe",
  );

  return filteredPipes.map(pipe => ({
    value: pipe.name,
    label: `${pipe.name} - ${pipe.price} руб/${pipe.unit}`,
  }));
};
