import React from 'react'
export default function Navigation() {
  return (
   <>
    <nav className='container p-3 border-b-1 mx-auto'>
        <ul className='space-x-10 gap-8 flex w-4/5 mx-auto text-xl'>
            <li className='bg-black rounded-sm p-2 text-white'><a href=''>Home</a></li>
            <li><a href=''>About us</a></li>
            <li><a href=''>Vegetables</a></li>
            <li><a href=''>Fruits</a></li>
            <li><a href=''>Dry Fruits</a></li>
            <li><a href=''>Account</a></li>
            <li><a href=''>Contact Us</a></li>
        </ul>
    </nav>
   </>
  )
}
