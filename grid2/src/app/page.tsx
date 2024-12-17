import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className='w-screen grid grid-cols-3 grid-rows-3 px-7 py-8'>
      
      <div className='div1 ml-7  mt-[5.5em] bg-cyan-600 w-[100px] h-[320px] gap-x-8 gap-y-8 outline outline-4 outline-black'>Nav</div>
      <div className= 'div2 -ml-[25em] bg-purple-800 w-[500px] h-20  gap-y-8 outline outline-4 outline-black'> Header</div>
      <div className='div3  -ml-[45em] mt-[5.5em]  bg-blue-400 w-[392px] h-[220px]  gap-x-8 gap-y-8 outline outline-4 outline-black'>cont1</div>
      <div className='div3 ml-[133px] -mt-[8em]  bg-blue-800 w-[200px] h-[120px] gap-x-8 gap-y-8 outline outline-4 outline-black'>cont1</div>
      <div className='div4 -ml-[6em] -mt-[8em] bg-blue-400 w-[195px] h-[120px] gap-x-0 gap-y-8 outline outline-4 outline-black'>Ads</div>
      <div className='div5 -ml-[51.6em]  bg-purple-800 w-[500px] h-[80px] gap-x-8 gap-y-8 outline outline-4 outline-black '>Footer</div>


    </div>
    </div>
  )
}

export default page
