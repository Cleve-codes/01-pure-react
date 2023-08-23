function Progress({ index, numQuestions }) {
  return (
    <header className="progress">
      <p>
        Question {index} / {numQuestions}
      </p>
    </header>
  );
}

export default Progress;
