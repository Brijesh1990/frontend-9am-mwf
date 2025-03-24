import React from 'react'
import { MDBContainer,MDBRow,MDBBtn } from 'mdb-react-ui-kit'
export default function Container() {
  return (
    <div>

        <MDBContainer fluid className='bg-primary mt-0 shadow  mx-auto p-2'>
        <h1 className='text-center text-white'>Examples of Material design</h1>
        <hr className='text-center text-white' /> 
        <p className='text-center text-white'> Lorem ipsum examples</p>  
        </MDBContainer> 
        
        <MDBContainer className='bg-primary mt-5 shadow w-50 mx-auto p-5'>
        <h1 className='text-center text-white'>Examples of Material design</h1>
        <hr className='text-center text-white' /> 
        <p className='text-center text-white'> Lorem ipsum examples</p>  
        </MDBContainer>
    </div>
  )
}
