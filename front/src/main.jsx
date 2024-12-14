import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import UserContextProvider from './context/UserContext';
import { Provider } from 'react-redux';
import store from './store';

const root = document.querySelector('#root');

createRoot(root).render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);
