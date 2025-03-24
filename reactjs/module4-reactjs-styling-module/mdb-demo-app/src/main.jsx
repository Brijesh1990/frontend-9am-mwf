import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Container from './components/Container';
// import ButtonApp from './components/ButtonApp';
// import CardApp from './components/CardApp';
// ecommerce app
import Layout from './components/Layout';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Container /> */}
    {/* <ButtonApp /> */}
    {/* <CardApp /> */}

    <Layout />
  </StrictMode>,
)
