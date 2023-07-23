import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, SetBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    SetBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={SetBill} />
      <SelectPercentage
        percentage1={percentage1}
        setPercentage1={setPercentage1}
      >
        How do you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage
        percentage2={percentage2}
        setPercentage2={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        placeholder="Bill value"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <span>{children}</span>
      <select>
        <option>Disatisfied (5%)</option>
        <option>It was okay (10%)</option>
        <option>It was good (15%)</option>
        <option>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
