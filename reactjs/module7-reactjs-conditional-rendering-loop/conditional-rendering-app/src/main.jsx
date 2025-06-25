import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './IfApp';
// import App from './TernaryApp';
// import App from './IfElseIf';
// import App from './SwitchApp';
import App from './LoaderApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
