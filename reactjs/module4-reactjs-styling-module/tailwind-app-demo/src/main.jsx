import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import FlexApp from './components/FlexApp'
import FlexAppDemo from './components/FlexAppDemo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FlexApp /> */}
    <FlexAppDemo />
  </StrictMode>,
)
