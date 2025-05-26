import React from 'react'
import { Nav } from './Nav';
import { NavLink } from 'react-router-dom';
export function Firstpage() {
  return (
    <div className='bg-[url(./background/notes.jpg)] bg-no-repeat bg-cover h-screen'>
      <Nav></Nav>
    <div className='flex justify-center mt-30 '>
            
        <div className='sm:w-150 w-80 p-10 shadow-lg bg-white rounded-xl inset-shadow-sm inset-shadow-yellow-800'>
            <h1 className='text-5xl font-semibold p-2 '>Welcome to MakeNote!</h1>
            <h3 className='text-gray-500 m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores inventore, similique quisquam aliquid tempore consectetur. Lorem, ipsum dolor.</h3>
            <div className='flex sm:flex-col  md:flex-col justify-center'>
                <button className='w-100 m-1 cursor-pointer border-2 p-2 text-white font-semibold text bg-violet-700 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><NavLink to={'/Register'}> Create an Account</NavLink></button>
                <button className='w-100 m-1 cursor-pointer border-2 border-violet-300 text-black p-2 font-semibold text bg-violet-300 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '><NavLink to={'/login'}>Already Registered? Login</NavLink></button>

            </div>
        </div>
    </div>
    </div>
  );
}
