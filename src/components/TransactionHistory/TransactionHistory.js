import React from 'react';
import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
    
      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id}>
            <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))} 
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default TransactionHistory;