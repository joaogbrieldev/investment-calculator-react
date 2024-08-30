interface UserInputProps {
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  changeInput: (field: string, value: number | string) => void;
}

export const UserInput: React.FC<UserInputProps> = ({
  userInput,
  changeInput,
}) => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(event) =>
                changeInput("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
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
              value={userInput.expectedReturn}
              onChange={(event) =>
                changeInput("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(event) => changeInput("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
};
