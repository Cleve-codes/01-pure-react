import "./index.css";
import Header from "./Header";
import Bank from "./Bank";
import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
      case "openAccount":
        return {
          ...state, isActive: false
        }
      
      case "closeAccount":
        return {
          ...state, isActive: true
        }

      default :
      return "UNKOWN ACTION"
    }
}

const initialState = {
  balance: 0,
  loan: 0,
  isActive: true,
}

function App() {

  const [{balance, loan, isActive}, dispatch] = useReducer(reducer, initialState)

  return <div className="App">
    <Header />
    <Bank dispatch={dispatch} isActive={isActive} loan={loan} balance={balance} />
  </div>;
}

export default App;
