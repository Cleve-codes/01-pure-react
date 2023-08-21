function Option({question}) {
    return (
      <div className="options">
        {question.options.map((q, i) => {
          return (
            <button className="btn btn-option" key={i}>
              {q}
            </button>
          );
        })}
      </div>
    );
}

export default Option
