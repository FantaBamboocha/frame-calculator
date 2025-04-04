import { useState } from "react";
import { CalculationResults, ResultContext } from "./ResultContext";

export const ResultProvider = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<CalculationResults | null>(null);

  return (
    <ResultContext.Provider value={{ results, setResults }}>
      {children}
    </ResultContext.Provider>
  );
};
