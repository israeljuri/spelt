import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import './styles/color.scss';
import 'animate.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
