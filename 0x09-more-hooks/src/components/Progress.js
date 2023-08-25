function Progress({ index, numQuestions }) {
  return (
    <header className="progress">
      <progress max={numQuestions}></progress>
      <p>
        Question {index} / {numQuestions}
      </p>
    </header>
  );
}

export default Progress;
