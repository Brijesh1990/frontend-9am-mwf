import React from 'react'
import { Add,Subs } from './Calc'
export default function CalculatorApp() {
  return (
    <div>
      <div className='app'>
        <h1>Calculator App</h1>
        <button type='button' onClick={Add}>Additions</button>
        <button type='button' onClick={Subs}>Substractions</button>

      </div>
    </div>
  )
}
