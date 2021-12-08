import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { UserContextProvider } from './1-Auth/context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
