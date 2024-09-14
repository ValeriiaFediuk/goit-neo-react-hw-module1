import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.transactionTitle}>
          <th className={styles.defines}>Type</th>
          <th className={styles.defines}>Amount</th>
          <th className={styles.defines}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.transactionRow}>
            <td className={styles.defines}>{type}</td>
            <td className={styles.defines}>{amount}</td>
            <td className={styles.defines}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
