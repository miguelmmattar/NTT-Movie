import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/reset.css';
import './assets/index.css';
import reportWebVitals from './utils/reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

reportWebVitals();
