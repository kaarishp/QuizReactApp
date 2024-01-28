// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import QuizApp from './components/QuizApp';
import './QuizApp.css';

ReactDOM.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
  document.getElementById('root')
);
