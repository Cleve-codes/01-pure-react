function Progress({ index, numQuestions }) {
  return (
    <header className="progress">
      <progress max={10} ></progress>
      <p>
        Question {index} / {numQuestions}
      </p>
    </header>
  );
}

export default Progress;