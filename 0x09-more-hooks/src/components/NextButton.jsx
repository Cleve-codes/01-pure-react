import React from "react";

function NextQuestion({ index, numQuestions, dispatch, answer }) {
  // Conditionally render he btn if answer is present
  if (answer === null) return null;
  // console.log(answer);

  //Go to next question
  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn  btn-ui"
      >
        Next
      </button>
    );

  // Moving to finish screen
  if (index === numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn  btn-ui"
      >
        Finish
      </button>
    );
}

export default NextQuestion;
