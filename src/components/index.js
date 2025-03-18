import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Стилі для базових елементів
import App from './App'; // Головний компонент додатку

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
