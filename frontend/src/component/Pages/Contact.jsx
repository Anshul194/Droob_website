import React from 'react';
import Footer from '../footer'
import Header from '../header';

export default function Contact() {
  return (
    <>

  <Header></Header>
      <div className='bg-black min-h-80 p-40'>
        <p className='text-white flex justify-center items-center font-bold text-4xl'>
          The Easiest Way To Create Website<br />
          Quick Copy & Make Site.
        </p>
        <div className='text-gray-400 flex flex-row justify-center mt-4'>
          <ul className='flex flex-row'>
            <li className='ml-4'>Home</li>
            <li className='ml-4'>Contact</li>
          </ul>
        </div>
      </div>
      
      <div className='contact-form bg-slate-900'>
        <div className='text-white ml-12  '>
          <p className='text-red-500 text-xl flex justify-center items-center p-8'>Contact Form</p>
          <p className='text-4xl font-bold flex justify-center items-center mb-16'>Our Contact Address Here.</p>
        </div>

        <div className='grid md:grid-cols-2'>
          <form className='ml-12 mb-8'>
            <input className='bg-transparent w-full mb-4 text-white rounded p-2' type='text' placeholder='Your Name' />
            <input className='bg-transparent w-full mb-4 text-white rounded p-2' type='text' placeholder='Email address' />
            <input className='bg-transparent w-full mb-4 text-white rounded p-2' type='text' placeholder='Phone number' />
            <input className='bg-transparent w-full mb-4 text-white rounded p-2' type='text' placeholder='Subject' />
            <textarea className='bg-transparent w-full mb-4 text-white rounded p-2' placeholder='Message'></textarea>
            <button className='bg-red-500 text-white p-4 rounded font-bold'>Submit</button>
          </form>

          <div className='-mt-8 p-8 mb-12'>
         <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
         
        </div>


        <div className="flex flex-row">
            <p className="text-white text-4xl font-bold relative p-16">
              Ready to start creating a standard website?
            </p>
            <button className="text-white bg-red-600 m-auto p-4 rounded-md font-bold">
              Purchase Doob
            </button>

     
          </div>
<Footer></Footer>

      </div>
    </>
  );
}
