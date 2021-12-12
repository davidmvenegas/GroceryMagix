import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { UserContextProvider } from './1-Auth/context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
