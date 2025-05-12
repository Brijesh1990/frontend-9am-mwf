import React from 'react'
import { Add,Subs,Mul,Div } from './CalcApp'
import { Container } from 'react-bootstrap'
export default function BtnClick() {
  return (
    <div>

          <Container className='p-5 mt-5 shadow'>
            <button type='button' className='btn btn-md btn-dark text-white ms-2' onClick={Add}>Click To Add</button>

            <button type='button' className='btn btn-md btn-dark text-white ms-2' onClick={Subs}>Click To Substract</button>
            
            <button type='button' onClick={Mul} className='btn btn-md btn-dark text-white ms-2'>Click To Multiplications</button>
          
            <button type='button' className='btn btn-md btn-dark text-white ms-2' onClick={Div}>Click To Divisions</button>
          
          </Container>
    </div>
  )
}
