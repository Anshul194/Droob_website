import React from 'react'
import Feedback from './feedback'
export default function splitSection() {
  return (
<>
<div className=' bg-black'>
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <img className='' src='./split-03.jpg'>
        </img>
        <div className=''>
            <p className='text-white font-bold text-4xl flex justify-center items-center ml-8'>Continue Your Business With Us.</p>
            <p className='text-gray-400 p-12 ml-12'>Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .</p>
            <div className='grid grid-cols-2 p-12 ml-12'>
            <div>
            <p className='text-4xl text-blue-700 font-bold mb-4'>199+</p>
            <p className='text-white text-xl font-medium'>Happy Clients.</p>
            </div>
            <div>
            <p className='text-4xl text-blue-700 font-bold mb-4'>575+</p>
            <p  className='text-white text-xl font-medium'>Employees</p>
            </div>
            </div>
            <div className='grid grid-cols-2  p-12 ml-12'>
                <div>            <p className='text-4xl text-blue-700 font-bold mb-4'>69+</p>
            <p  className='text-white text-xl font-medium'>Useful Programs</p>
            </div>
            <div>
            <p className='text-4xl text-blue-700 font-bold mb-4'>500+</p>
            <p  className='text-white text-xl font-medium'>Useful Programs</p>
            </div>
            </div>

        </div>
    </div>

    <Feedback></Feedback>
</div>
</>  )
}
