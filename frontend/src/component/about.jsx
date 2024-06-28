import React from 'react'
import SplitSection from './splitSection'

export default function about() {
  return (
    <>  
    <hr className='text-white w-full'></hr>
    <div className='bg-black p-16'>
        <div className='grid md:grid-cols-2'>
            <img className='md:mb-0 mb-8' src='./about-1.png'></img>
<div className=''>
    <p className='text-4xl text-white font-bold p-8'>About Our Business.</p>

    <p className='text-gray-500 text-xl p-8'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!
    </p>

    <ul className='text-gray-500 text-xl p-8'>
        <li className='p-4'>Track your teams progress with mobile app.</li>
        <li className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li className='p-4'>Ipsum dolor sit amet consectetur adipisicing.</li>
        <li className='p-4'>Your teams progress with mobile app.</li>
    </ul>


    <button className='bg-red-600 text-white p-4 rounded-md flex justify-center items-center ml-12 mb-30'>Learn More</button>
</div>

        </div>
        
    </div>
    <SplitSection></SplitSection>
    </>
  
  )
}
