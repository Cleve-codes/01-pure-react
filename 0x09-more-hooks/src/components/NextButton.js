import React from "react";

function NextQuestion({ dispatch, answer }) {
  if (answer === null) return null;
 // console.log(answer);
  return (
    <button
      onClick={() => dispatch({ type: "nextQuestion" })}
      className="btn  btn-ui"
    >
      Next
    </button>
  );
}

export default NextQuestion;
