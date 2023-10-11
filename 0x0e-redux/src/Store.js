import { createStore, combineReducers } from "redux";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";









const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer);

export default store;
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Blunts" },
// });
// console.log(store.getState());



// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(1000, "Blunts"));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());



// store.dispatch(createCustomer("Cleve Momanyi", "39930616"))
// console.log(store.getState())

// store.dispatch(updateName("Not Cleve"))
// console.log(store.getState())