import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Shyams=React.createElement(
    'a',
    {href:'htpps://.google.com', target:"_blank"},
    "Hello Click me"
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    //Shyams
);
reportWebVitals();
