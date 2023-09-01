function Bank() {
    return (
      <div>
        <p>Balance : 0</p>
        <p>Loan : 0</p>
        <button>Open Account</button>
        <br></br>
        <button disabled>Deposit</button>
        <br></br>
        <button disabled>Withdraw</button>
        <br></br>
        <button disabled>Request Loan of 5000</button>
        <br></br>
        <button disabled>Pay loan</button>
        <br></br>
        <button disabled>close account</button>
      </div>
    );
}

export default Bank
