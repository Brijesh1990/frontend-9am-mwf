import React from 'react'
export default function FlexApp() {
  return (
    <>
        <div className='flex flex-row mx-auto w-full mt-0 p-16 bg-green-300'>
            <div className='basis-64 bg-amber-900 p-10 m-5 text-sm text-white'>01</div>
            <div className='basis-64 bg-amber-900 p-10 m-5 text-xl text-white'>02</div>
            <div className='basis-128 bg-amber-900 p-10 m-5 text-4xl text-white'>03</div>
        </div>

<div class="flex flex-row mt-16 w-1/2 mx-auto">
  <div class="basis-1/3 bg-red-600 p-10 m-5 text-xl text-white">01</div>
  <div class="basis-2/3 bg-red-500 p-10 m-5 text-2xl text-white">02</div>
  <div class="basis-2/3 bg-amber-400 p-10 m-5 text-2xl text-white">02</div>
</div>


<div class="flex flex-row-reverse mt-10">
  <div className='bg-amber-500 p-5 w-1/3 m-5'>01</div>
  <div className='bg-amber-500 p-5 w-1/3 m-5'>02</div>
  <div className='bg-amber-500 p-5 w-1/3 m-5'>03</div>
  
</div>



<div class="flex flex-col w-1/2 mx-auto">
  <div className='bg-amber-500 p-5 w-full m-5'>01</div>
  <div className='bg-amber-500 p-5 w-full m-5'>02</div>
  <div className='bg-amber-500 p-5 w-full m-5'>03</div>
  
</div>
    </>
  )
}
