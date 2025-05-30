import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Employee from './components/employee'
import Counter from './components/CounterApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Employee /> */}
    <Counter />
  </StrictMode>,
)
