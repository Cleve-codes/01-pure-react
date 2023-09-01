function Bank({ dispatch, isActive, balance, loan }) {
  return (
    <div>
      <p>Balance : {balance}</p>
      <p>Loan : {loan}</p>
      <button onClick={() => dispatch({ type: "openAccount" })}>
        Open Account
      </button>
      <br></br>
      <button onClick={()=>dispatch({type: "deposit", payload: 150})} disabled={isActive}>Deposit 150</button>
      <br></br>
      <button onClick={()=>dispatch({type: "withdraw", payload: 50})} disabled={isActive}>Withdraw 50</button>
      <br></br>
      <button onClick={()=>dispatch({type: "loan", payload: 5000})} disabled={isActive}>Request Loan of 5000</button>
      <br></br>
      <button onClick={()=>dispatch({type: "payLoan"})} disabled={isActive}>Pay loan</button>
      <br></br>
      <button onClick={()=>{dispatch({type: "closeAccount"})}} disabled={isActive} >close account</button>
    </div>
  );
}

export default Bank;
