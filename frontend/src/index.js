import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createRoot} from 'react-dom/client';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);