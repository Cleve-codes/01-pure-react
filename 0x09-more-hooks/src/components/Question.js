import Option from "./Option";

function Question({ question, dispatch }) {
  //const tmp = question.correctOption
  // const answer = question.Option
  // console.log(answer)
  const { correctOption: index } = question;
  const answer = question.options[index]
  //console.log(answer)

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
