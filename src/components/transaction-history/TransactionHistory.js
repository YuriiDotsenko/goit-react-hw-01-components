import React from 'react';
import Transaction from './Transaction';
import PropTypes from 'prop-types';
import './Transaction.css';

const TransactionHistory = ({ items }) => (
  <table className="Transactions__table">
    <thead className="Transactions__head">
      <tr>
        <th className="Transactions__name">Type</th>
        <th className="Transactions__name">Amount</th>
        <th className="Transactions__name">Currency</th>
      </tr>
    </thead>

    <tbody className="Transactions__body">
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className="Transactions__table__section">
          <Transaction type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
