import React, { useState } from 'react'
import { Nav } from './Nav'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
// import app from '../src/App.css';
export function Registerpage() {
  const navigate=useNavigate();
  const inputdata={
    name:"",
    email:"",
    password:""
  }
  const [data,setdata]=useState(inputdata);
  const handleInput=(e)=>{
    setdata({...data,[e.target.name]:e.target.value })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(data.name==""||data.email==""||data.password==""){
      alert("fill all inputs")
    }
    else{
      const getItem=JSON.parse(localStorage.getItem("data")||"[]");
      let arr=[];
      arr=[...getItem];
      arr.push(data)
      localStorage.setItem("data",JSON.stringify(arr));
      alert("Register Successfully");
      navigate('/login');
    }
  }
  console.log(data)
  return (
    <div className='bg-[url(./background/notes2.jpg)] bg-no-repeat bg-cover h-screen'>
    <Nav/>
    <div className={`flex  justify-center m-20`}>
        <div className='w-80 sm:w-150 p-10 shadow-lg bg-white rounded-xl inset-shadow-sm inset-shadow-yellow-800'>
      <h1 className='text-3xl font-semibold text-center p-2 '>Create Your Notes Account</h1>
        <form className=' flex flex-col text-center' onSubmit={handleSubmit}>
          <>
          <input type='text' name="name" className="border-gray-500 border-3 m-2 w-65 sm:w-120 p-1 border-none" id="Fullname" placeholder='Name' onChange={handleInput} required/>
          <input type='email' name="email" className="m-2 w-65 p-1 sm:w-120 border-none" id="email" placeholder='Email Id' onChange={handleInput} required/>
          <input type='password' name="password" className="m-2 w-65 p-1 sm:w-120 border-none" id="password" placeholder='Password' onChange={handleInput} required/>
        <h1 className='text-end text-blue-700 cursor-pointer hover:underline m-2'><NavLink to="/login">Already Registered? Login
          </NavLink></h1>
          <div className='flex justify-center'>
          <button className='w-65 sm:w-100 m-1 cursor-pointer border-2 p-2 text-white font-semibold text bg-violet-700 rounded-lg ransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>Sign up</button>
          </div>
          </>
        </form>
           
        </div>
    </div>
    </div>
  )
}
