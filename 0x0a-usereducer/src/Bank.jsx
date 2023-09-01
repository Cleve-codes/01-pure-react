function Bank({ dispatch, isActive }) {
  return (
    <div>
      <p>Balance : 0</p>
      <p>Loan : 0</p>
      <button onClick={() => dispatch({ type: "openAccount" })}>
        Open Account
      </button>
      <br></br>
      <button disabled={isActive}>Deposit 150</button>
      <br></br>
      <button disabled={isActive}>Withdraw 50</button>
      <br></br>
      <button disabled={isActive}>Request Loan of 5000</button>
      <br></br>
      <button disabled={isActive}>Pay loan</button>
      <br></br>
      <button onClick={()=>{dispatch({type: "closeAccount"})}} disabled={isActive} >close account</button>
    </div>
  );
}

export default Bank;
