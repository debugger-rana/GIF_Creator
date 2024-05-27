import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

function Tag() {
  const[tag,setTag]=useState("car");
  const{gif,loading,fetchData}=useGif(tag);
   
  
  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] mb-[25px]'>
        <h1 className='mt-[15px] text-2xl uppercase font-semibold underline'>Random gif of {tag}</h1>
        {
        loading ? (<Spinner/>) :(<img src={gif}/>)
         }
         <input
         className='w-10/12  text-lg py-2 rounded-lg mb-[2px] text-center'
         onChange={(event)=>{
          setTag(event.target.value);
         }}
         value={tag}
         />
        <button onClick={()=> fetchData(tag)}
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag