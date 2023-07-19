const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  let steps = 1;

  /* Event handler functions */
  /* Handle event on previousBtn click */
  function handlePrevious() {
    alert("Previous");
  }
  /* Handle event on nextBtn click */
  function handleNext() {
    alert("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
        <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
        <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
      </div>

      {/* Change display message based on btn click */}
      <p className="message">
        Step {steps} {messages[steps - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
