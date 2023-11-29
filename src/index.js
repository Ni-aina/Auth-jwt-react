import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProfilContextProvider from './userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfilContextProvider>
      <App />
    </UserProfilContextProvider>
  </React.StrictMode>
);
