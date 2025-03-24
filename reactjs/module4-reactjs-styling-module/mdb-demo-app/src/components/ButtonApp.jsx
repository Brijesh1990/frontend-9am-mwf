import React from 'react'
import { MDBContainer,MDBRow,MDBBtn } from 'mdb-react-ui-kit'
export default function ButtonApp() {
  return (
    <div>
        
        <MDBContainer className='bg-primary mt-5 shadow w-50 mx-auto p-5'>
        <h1 className='text-center text-white'>Button examples</h1>
        <hr className='text-center text-white' /> 
        <p className='text-center text-white'> 
        
        <MDBBtn className='btn btn-danger text-white'>Sign Up</MDBBtn>
        
        <MDBBtn className='btn btn-danger text-white btn-lg ms-5'>Sign Up</MDBBtn>

        <MDBBtn className='btn btn-danger text-white w-25 ms-2'>Sign Up</MDBBtn>
        
        
        <MDBBtn className='btn btn-outline-danger text-white ms-3'>Sign Up</MDBBtn>
        </p>  
        </MDBContainer>
    
    </div>
  )
}
