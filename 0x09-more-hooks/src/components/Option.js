function Option({question, dispatch, answer }) {
    return (
      <div className="options">
        {question.options.map((q, i) => {
          return (
            <button className={q === answer ? `btn btn-option success`: "btn btn-option error"} key={i} onClick={()=>dispatch({type: "nextQuestion"})} answer={answer} >
              {q}
            </button>
          );
        })}
      </div>
    );
}

export default Option
