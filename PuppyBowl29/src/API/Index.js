import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fetchPlayer } from './ajaxHelpers';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { fetchPlayer };
