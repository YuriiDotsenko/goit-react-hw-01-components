import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.css';

const Transaction = ({ type, amount, currency }) => (
  <>
    <td className="Transactions__type">{type}</td>
    <td className="Transactions__item">{amount}</td>
    <td className="Transactions__item">{currency}</td>
  </>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
