import { connect } from "react-redux";

function formatCurrency(value) {
  if (isNaN(value)) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapsPropsToState(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapsPropsToState)(BalanceDisplay);
