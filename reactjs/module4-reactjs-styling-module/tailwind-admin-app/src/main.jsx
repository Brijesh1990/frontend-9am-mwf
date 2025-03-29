import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './AdminLayout'
// import Login from './components/admin/Login'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Login /> */}
  <AdminLayout />
  </StrictMode>,
)
