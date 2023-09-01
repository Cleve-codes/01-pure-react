import "./index.css";
import Header from "./Header";
import Bank from "./Bank";
import { useReducer } from "react";

function reducer(state, action) {
  if(!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: false,
      };

    case "closeAccount":
      return {
        ...state,
        isActive: state.balance && state.loan === 0 ? false: true,
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "withdraw":
      return {
        ...state,
        balance: state.balance > 0 ? state.balance - action.payload : state.balance,
      };

    case "loan":
      if(state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };

    case "payLoan":
      return {
        ...state,
        balance: state.loan > 0 ? 0: state.balance,
        loan: state.loan > 0 ? 0: state.loan,
      };

    default:
      return "UNKOWN ACTION";
  }
}

const initialState = {
  balance: 0,
  loan: 0,
  isActive: true,
};

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <Header />
      <Bank
        dispatch={dispatch}
        isActive={isActive}
        loan={loan}
        balance={balance}
      />
    </div>
  );
}

export default App;
