import { useResults } from "@shared/context";

import styles from "./ResultTable.module.scss";

export const ResultTable = () => {
  const { results } = useResults();

  if (!results)
    return (
      <div className={styles.description}>
        Выполните расчет чтобы увидеть результаты
      </div>
    );

  const totalPrice = (
    (results.sheets?.totalPrice || 0) +
    (results.pipes?.totalPrice || 0) +
    (results.screws?.totalPrice || 0)
  ).toFixed(2);
  return (
    <div className={styles.resultContainer}>
      <div className={styles.summary}>
        <h2>Параметры конструкции</h2>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <p>Площадь покрытия:</p>
            <p>{results.sheets?.area.toFixed(2)} м²</p>
          </div>
          <div className={styles.summaryItem}>
            <p>Размер ячеек каркаса:</p>
            <p>
              {results.pipes?.cellSize.width.toFixed(2)}м ×{" "}
              {results.pipes?.cellSize.length.toFixed(2)}м
            </p>
          </div>
          <div className={styles.summaryItem}>
            <p>Ориентация листов:</p>
            <p>
              {results.sheets?.isRotated
                ? "Поперёк конструкции"
                : "Вдоль конструкции"}
            </p>
          </div>
        </div>
      </div>

      <table className={styles.materialsTable}>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Ед.</th>
            <th className={styles.alignRight}>Кол-во</th>
            <th className={styles.alignRight}>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Листы покрытия</td>
            <td>м²</td>
            <td className={styles.alignRight}>
              {results.sheets?.area.toFixed(2)}
            </td>
            <td className={styles.alignRight}>
              {results.sheets?.totalPrice.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Каркасные трубы</td>
            <td>мп</td>
            <td className={styles.alignRight}>
              {results.pipes?.count.toFixed(2)}
            </td>
            <td className={styles.alignRight}>
              {results.pipes?.totalPrice.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Саморезы</td>
            <td>шт</td>
            <td className={styles.alignRight}>{results.screws?.count}</td>
            <td className={styles.alignRight}>
              {results.screws?.totalPrice.toFixed(2)}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Итого:</td>
            <td className={styles.alignRight}>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
