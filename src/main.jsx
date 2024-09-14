import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App 
      userData={userData} 
      friends={friends} 
      transactions={transactions} 
    />
  </React.StrictMode>
);
