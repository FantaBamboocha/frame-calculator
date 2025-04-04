import { createContext, Dispatch, useContext } from "react";

export interface CalculationResults {
  sheets?: {
    count: number;
    area: number;
    totalPrice: number;
    isRotated: boolean;
  };
  pipes?: {
    count: number;
    totalPrice: number;
    cellSize: { width: number; length: number };
  };
  screws?: {
    count: number;
    totalPrice: number;
  };
}

export const ResultContext = createContext<{
  results: CalculationResults | null;
  setResults: Dispatch<React.SetStateAction<CalculationResults | null>>;
}>({
  results: null,
  setResults: () => {},
});

export const useResults = () => useContext(ResultContext);
