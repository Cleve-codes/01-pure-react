import Option from "./Option";

function Question({ question }) {
  //const tmp = question.correctOption
  // const answer = question.Option
  // console.log(answer)

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}

export default Question;
