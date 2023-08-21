import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  // statuses => "loading", "error", "ready", "active", "finished".
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1 };

    default:
      throw new Error("Data not found");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const question = questions[index];
  

 // console.log(question, typeof question);


  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={question} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;
