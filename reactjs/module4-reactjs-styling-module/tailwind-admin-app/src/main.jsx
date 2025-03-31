import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Food delivery web app user panel
import Layout from './Layout'
// Food delivery web app admin panel
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* admin panel */}

  {/* <Login /> */}
  {/* <AdminLayout /> */}
  
  {/* customer panel */}
  <Layout />
  
  </StrictMode>,
)
