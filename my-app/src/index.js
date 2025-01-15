import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Interview } from './Interview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <App /> */}
    <Interview />
    </>
  </React.StrictMode>
);

