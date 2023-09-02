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
      if (state.balance === 0 && state.loan === 0) {
        return {
          ...state,
          isActive: false,
        };
      }
      return state;

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "withdraw":
      if (state.isActive && state.balance > action.payload) {
        return {
          ...state,
          balance: state.balance - action.payload,
        };
      }
      return state;

    case "loan":
      if (state.loan === 0) {
        return {
          ...state,
          loan: action.payload,
          balance: state.balance + action.payload,
        };
      }
      return state;

    case "payLoan":
      if (state.loan > 0) {
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      }
      return state;

    default:
      return state;
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
