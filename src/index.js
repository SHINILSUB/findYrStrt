import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/authservice';

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
    </React.StrictMode>,
  document.getElementById('root')
);