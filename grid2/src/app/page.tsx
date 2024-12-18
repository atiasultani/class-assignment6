import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className='h-screen grid grid-cols-5 grid-rows-5  px-6 py-7'>
      
      <div className=' bg-cyan-600 outline outline-4 outline-black col-span-5 flex justify-center items-center'>Header</div>
      <div className= ' bg-purple-800 outline outline-4 outline-black row-span-2 flex justify-center items-center'> Sidebar</div>
      <div className='  bg-blue-400 outline outline-4 outline-black col-span-4 flex justify-center items-center'>cont1</div>
      <div className=' bg-blue-800  outline outline-4 outline-black  col-span-2 row-span-1 flex justify-center items-center'>cont2</div>
      <div className=' bg-blue-800  outline outline-4 outline-black col-span-2 row-span-1 flex justify-center items-center'>cont3</div>
      <div className=' bg-purple-800 outline outline-4 outline-black col-span-5 flex justify-center items-center'>Footer</div>


    </div>
    </div>
  )
}

export default page
