import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Getgreeting from './Greetings'
//import Employess from './Employess'
// import ChildApp from './ParentApp'
import StartMesage from './LoadingApp'
import ConditionalApp from './ConditionalApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Getgreeting /> */}

    {/* <Employess name="My name is Brijesh" /> */}
{/* 
    <Employess name="Vaibhav" /> */}


   {/* <ChildApp /> */}

   {/* <ConditionalApp /> */}

   {/* <StartMesage /> */}
    {/* <StartMesage isLoading={true} /> */}
    <StartMesage isLoading={false} />

  </StrictMode>,
)
