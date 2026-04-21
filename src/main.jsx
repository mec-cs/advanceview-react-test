import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// BEN HARIKAYIM, CEVABI BULDUM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
