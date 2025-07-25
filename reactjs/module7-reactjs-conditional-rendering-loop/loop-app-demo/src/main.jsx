import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeApp from './Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeApp />
  </StrictMode>
);
