import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'react-semantic-toasts/styles/react-semantic-alert.css';
// import 'react-datepicker/dist/react-datepicker.css';

import './index.css';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root'),
);
