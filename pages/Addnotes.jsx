import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Notes } from './Notes'
import { Card } from './Card';

export function Addnotes() {
  const [addnotes,setnotes]=useState(false);
  const [data,setdata]=useState([]);

  const popuppage=()=>{
      setnotes(true);
    }
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem("list")) || []; // Retrieve or default to []
      setdata(storedTasks);
    }, []);
    const deleteitem=(index)=>{
      const updateditem=data.filter((_,i)=>(i!==index));
      setdata(updateditem);
      localStorage.setItem('list',JSON.stringify(updateditem));
    }
  return (
    <div className='bg-[url(./background/notes3.jpg)] bg-no-repeat bg-cover h-screen min-h-max'>
    <Nav/>
    <div className='flex justify-end'>
    <button className='text-end border-2 cursor-pointer border-purple-500 text-white rounded-lg m-4 bg-purple-500 p-2 font-bold text-xl' onClick={popuppage}>Add notes +
    </button>
    </div>
    <div className='flex justify-center'>
    {
      addnotes?
      <Notes setnotes={setnotes}/>
      :
      ''}
      </div>
      <Card data={data} deleteitem={deleteitem}/>
    </div>
  )
}
