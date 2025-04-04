import { Providers } from "./providers/Providers";
import { Calculator } from "@widgets/Calculator";

import styles from "./App.module.scss";
import { ResultTable } from "@widgets/ResultTable/ui/ResultTable";

export const App = () => {
  return (
    <Providers>
      <main>
        <section className={styles.calculator}>
          <h1>калькулятор расчета каркаса с покрытием листов</h1>
          <Calculator />
        </section>
        <section className={styles.result}>
          <ResultTable />
        </section>
      </main>
    </Providers>
  );
};
