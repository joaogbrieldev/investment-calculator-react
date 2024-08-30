import { formatter } from "../util/investment";

export const Results = ({ results }) => {
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
              <td>{formatter.format(item.interest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
