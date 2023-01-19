import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18next';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  /*  <React.StrictMode> */
  <AuthContextProvider>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </AuthContextProvider>
  /* </React.StrictMode> */
);
