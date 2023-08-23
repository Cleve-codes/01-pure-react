function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((q, i) => {
        return (
          <button
            key={i}
            
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
            className={`btn btn-option ${i} === ${
              q === answer ? "success" : ""
            } ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          >
            {q}
          </button>
        );
      })}
    </div>
  );
}

export default Option;
