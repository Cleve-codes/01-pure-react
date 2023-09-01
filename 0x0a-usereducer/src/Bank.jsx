function Bank({dispatch, isActive}) {
    return (
      <div>
        <p>Balance : 0</p>
        <p>Loan : 0</p>
        <button onClick={() => dispatch({ type: "openAccount" })}>
          Open Account
        </button>
        <br></br>
        <button disabled={isActive ? false : true}>Deposit 150</button>
        <br></br>
        <button disabled={isActive ? false : true}>Withdraw 50</button>
        <br></br>
        <button disabled={isActive ? false : true}>Request Loan of 5000</button>
        <br></br>
        <button disabled={isActive ? false : true}>Pay loan</button>
        <br></br>
        <button disabled={isActive ? false : true}>close account</button>
      </div>
    );
}

export default Bank
