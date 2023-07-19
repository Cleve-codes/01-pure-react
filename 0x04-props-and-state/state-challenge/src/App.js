import { useState } from "react";

export default function App() {
  return (
    <div class="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("April 1 2003");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="steps">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div className="steps">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
