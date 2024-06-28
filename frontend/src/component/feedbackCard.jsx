import React from 'react';
export default function FeedbackCard({ img, name, designation, content }) {
  return (
    <>   <div className='bg-slate-900 p-12 rounded-lg shadow-lg text-white w-84 mb-8 '>
      <div className='flex items-center justify-center h-24 w-24 rounded-full border-4 border-red-500 overflow-hidden ml-28 mb-8'>
        <img className='h-full w-full object-cover flex justify-center item-center' src={img} alt={name} />
      </div>
      <p className='mt-2 text-slate-400 text-xl font-bold'>{content}</p>
      <p className='mt-4 text-xl font-bold ml-12 text-red-600 ml-28 mb-4'>{name}</p>
      <p className='text-lg ml-24'>{designation}</p>
     
    </div>
    </>
 
  );
}
