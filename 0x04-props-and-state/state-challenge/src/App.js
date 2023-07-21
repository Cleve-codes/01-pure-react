import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(0);
  }

  const date = new Date("April 1 2003");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="steps">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>

      <div className="steps">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 0 || count !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
