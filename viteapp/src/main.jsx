import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';

const customObject =(
    <div>
      <h2>Custom Object by Chai aur Code</h2>
    </div>
);

const reactEle = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Google',
  customObject // here we can't use if 
)

/*
<a href="https://google.com" target="_blank">
  Google
  <div>
    <h2>Custom Object by Chai aur Code</h2>
  </div>
</a>
*/






const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    {reactEle}
  </>
  
);

