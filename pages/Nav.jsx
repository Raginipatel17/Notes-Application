import React from 'react'

export function Nav() {
  return (
    <div className='sm:flex lg:w-full sm:w-full w-full font-bold h-16 text-white p-2 sm:justify-between bg-black'>
        <h1 className='cursor-pointer sm:ps-10 text-2xl'>MakeNote!</h1>
        <h1 className='cursor-pointer sm:pe-20'>Home</h1>
    </div>
  )
}
