import React from 'react'

export default function FlexAppDemo() {
return (
<div>

<div class="flex flex-wrap w-full mx-auto p-5 md:flex-wrap-reverse">
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>01</div>
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>02</div>
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>03</div>
</div>


<div class="flex flex-wrap mx-auto p-5 md:flex-wrap-reverse ...">
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>01</div>
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>02</div>
<div className='bg-sky-700 text-white p-5 m-10 rounded-xl w-1/2'>03</div>
</div>


</div>
)
}
