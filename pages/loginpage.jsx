import React, { useState } from 'react'
import { Nav } from './Nav'
import { NavLink, useNavigate } from 'react-router-dom';

export  function Loginpage() {
  const navigate=useNavigate();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [msg,setmsg]=useState("");
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    if("email"==name){
      setemail(value);
    }
    if("password"==name){
      setpassword(value);
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=JSON.parse(localStorage.getItem('data'));
    data.map((values)=>{
        console.log(values.password);
        let storedemail=values.email;
        let storedpassword=values.password;
        if(storedemail==email && storedpassword==password){
          alert("login successfully");
          navigate('/Addnotes');
        }
        else{
          return setmsg('Invalid password or email');
        }

    })
  }
  return (
   <div className='bg-[url(./background/notes2.jpg)] bg-no-repeat bg-cover h-screen'>
       <Nav/>
       <div className='text-white bg-red-400 text-bold m-4'>{msg}</div>
       <div className={`flex  justify-center m-20 `}>
           <div className='w-80 sm:w-150 p-10 shadow-lg bg-white rounded-xl inset-shadow-sm inset-shadow-yellow-800'>
         <h1 className='text-3xl font-bold text-start p-2 mb-5 '>Login </h1>
           <form onSubmit={handleSubmit} className=' flex flex-col text-center'>
             <>
            
             <input type='email' name="email" className="m-2 w-65 p-1 sm:w-120 border-none" id="email" placeholder='Email Id' onChange={handleInput}/>
            
             <input type='password' name="password" className="m-2 w-65 p-1 sm:w-120 border-none" id="password" placeholder='Password' onChange={handleInput}/>
           <h1 className='text-end text-blue-700 cursor-pointer hover:underline m-2'><NavLink to="/Register">If you want to create an account?</NavLink></h1>
             <div className='flex justify-center'>
             <button className='w-65 sm:w-100 m-1 cursor-pointer border-2 p-2 text-white font-semibold text bg-violet-700 rounded-lg ransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>Log in</button>
             </div>
             </>
           </form>
              
           </div>
       </div>
       </div>
  )
}
