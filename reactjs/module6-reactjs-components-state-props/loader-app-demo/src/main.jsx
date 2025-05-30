import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import LoaderApp from './LoaderApp'

import LoaderImages from './LoaderImages'

import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoaderApp /> */}
    <LoaderImages />
  </StrictMode>,
)
