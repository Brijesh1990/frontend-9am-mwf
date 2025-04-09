import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Food delivery web app user panel
import Layout from './Layout'
import ContactUs from './components/customer/pages/ContactUs'
import Products from './components/customer/pages/Products'
import AboutUs from './components/customer/pages/About'
import Account from './components/customer/pages/Account'
import Register from './components/customer/pages/Register'
import ForgetPassword from './components/customer/pages/ForgetPassword'
import PageNotFound from './components/customer/pages/PageNotFound'
// Food delivery web app admin panel
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* user & admin panel routing */}
 <Router>
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/products" element={<Products />} />
    <Route path="/create-account" element={<Account />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
 </Router>
  
  </StrictMode>,
)
