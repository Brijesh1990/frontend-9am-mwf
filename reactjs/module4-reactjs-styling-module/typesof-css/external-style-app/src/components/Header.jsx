import React from 'react'

export default function Header() {
  return (
    <section id='header'>
      <div className='call'>
        <p><b>Call us</b> (+91)-9998003879</p>
      </div>
      <div className='search'>
        <input type='text' placeholder='search anything here..........' />
      </div>
      <div className='account'>
        <button type='button'>CreateAccount</button>
      </div>
    </section>
  )
}
