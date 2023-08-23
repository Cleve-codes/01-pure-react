function Option({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((q, i) => {
        return (
          <button
            key={i}
            onClick={() => dispatch({ type: "nextQuestion" })}
            className={answer === q ? "btn btn-ui success" : "btn btn-ui error"}
          >
            {q}
          </button>
        );
      })}
    </div>
  );
}

export default Option;
