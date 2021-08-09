import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

reportWebVitals(process.env.NODE_ENV === 'development' ? console.log : () => {});
