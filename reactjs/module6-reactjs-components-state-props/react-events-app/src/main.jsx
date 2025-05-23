import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import BtnClick from './components/BtnClick.jsx'
//import CalculatorApp from './components/CalculatorApp.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BtnClick />
    {/* <CalculatorApp /> */}
  </StrictMode>,
)
