import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import UserContextProvider from './context/UserContext';

const root = document.querySelector('#root');
createRoot(root).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);