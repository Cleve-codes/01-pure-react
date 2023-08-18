import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import Main from "./Main";
import "./index.css";
import StartScreen from "./StartScreen";
import ActiveScreen from "./Question";


const initialState = {
  questions: [],

  // statuses => "loading", "error", "ready", "active", "finished".
  status: "loading",
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
        status: "active"
      };

    default:
      throw new Error("Data not found");
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

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
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && <ActiveScreen />}
      </Main>
    </div>
  );
}

export default App;
