import { ResultProvider } from "@shared/context/ResultProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ResultProvider>{children}</ResultProvider>;
};
