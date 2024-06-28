import React from 'react'
import About from './about'
export default function service({title,content}) {
  return (
    <>
    
    <div className='card bg-black flex flex-wrap hover:bg-red-200 transition-all ease-in-out gap-3 rounded-md md:mb-40'>
      
<p className='text-white  text-2xl font-bold p-12'>{title}</p>
  
<p className='text-slate-500 text-xl p-12 '>{content}</p>
    </div>
    </>
   
  )
}
