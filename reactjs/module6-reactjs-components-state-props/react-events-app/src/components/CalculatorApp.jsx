import React from 'react'
import { Container,Button } from 'react-bootstrap'
export default function CalculatorApp() {
  return (
    <div>
      <Container className='mt-5 w-75 m-0 p-0'>
        <table className='table m-0 p-0'>
            <tr>
                <input type='text'  className='form-control p-3 border border-0' placeholder='0' id='result' />
            </tr>
            <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>%</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>CE</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>C</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>&times;</button>
            </tr>
             <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>1/x</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>x<sup>2</sup></button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>2√x</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>/</button>
            </tr>
             <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>7</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>8</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>9</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>+</button>
            </tr>
             <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>4</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>5</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>6</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>-</button>
            </tr>
             <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>1</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>2</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>3</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>*</button>
            </tr>
             <tr>
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>+/-</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>0</button>
                
                <button type='button' className='btn btn-lg btn-light shadow' id='btn'>.</button>
                
                <button type='button' className='btn btn-lg  shadow btn-primary text-white' id='btn'>=</button>
            </tr>
        </table>
      </Container>
    </div>
  )
}
