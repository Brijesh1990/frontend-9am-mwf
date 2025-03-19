import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
// import ContainerApp from './components/ContainerApp'
// import ContainerFluidApp from './components/ContainerFluid'
// import ButtonApp from './components/ButtonApp'
// import AlertApp from './components/Alert'
import CardApp from './components/CardApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContainerApp /> */}
    {/* <ContainerFluidApp /> */}
    {/* <ButtonApp /> */}
    {/* <AlertApp /> */}
    <CardApp />
  </StrictMode>,
)
