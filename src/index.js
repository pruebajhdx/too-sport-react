import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Framework7 Core
import Framework7 from 'framework7/lite';
/*
Or import bundle with all components:
import Framework7 from 'framework7/lite-bundle';
*/

// Import Framework7 React
import Framework7React from 'framework7-react';

// Init plugin
Framework7.use(Framework7React)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
