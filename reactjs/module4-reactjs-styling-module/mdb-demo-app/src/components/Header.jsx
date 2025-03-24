import React from 'react'
import { MDBContainer,MDBRow,MDBBtn } from 'mdb-react-ui-kit'

export default function Header() {
  return (
    <MDBContainer fluid className='shadow p-5'>
      <MDBRow>
        <div className='col-md-3 call-us'>
            <b>Call Us : (+91)-999-8003879</b>
        </div>
        <div className='col-md-7 search-box'>
            <div className='input-group'>
                <input type='text' placeholder='search anything here....' className='form-control' />
                <button type='button' className='btn btn-md btn-dark text-white'>Search</button>
            </div>
        </div>
        <div className='col-md-2 cart-app'>
            <button type='button' className='btn btn-md btn-outline-dark'><span className='bi bi-cart fs-6'></span> Cart (2)</button>
        </div>
      </MDBRow>
    </MDBContainer>
  )
}
