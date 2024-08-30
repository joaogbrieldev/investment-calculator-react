import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import { Results } from "./Result";

export const UserInput = () => {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function changeInput(value1, value2) {
    setInputValues((prevUserInput) => {
      return {
        ...prevUserInput,
        [value1]: value2,
      };
    });
  }

  const result = calculateInvestmentResults(inputValues);

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(event) =>
                changeInput("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(event) =>
                changeInput("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(event) =>
                changeInput("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(event) => changeInput("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
      <Results results={result} />
    </>
  );
};
