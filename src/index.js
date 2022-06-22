import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Featured from './components/Featured';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="main-wrapper">
      <Featured />
    </div>
  </React.StrictMode>
);
