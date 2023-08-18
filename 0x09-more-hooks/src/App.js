import { useEffect, useReducer } from "react";
import Loader from "./Loader"
import Header from "./Header";
import Main from "./Main";
import "./index.css";

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

    default:
      throw new Error("Data not found");
  }
}

function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
      </Main>
    </div>
  );
}

export default App;
