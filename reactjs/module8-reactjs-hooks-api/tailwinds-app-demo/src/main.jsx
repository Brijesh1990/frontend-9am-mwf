import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Employee from './Employee';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employee />
  </StrictMode>
);
