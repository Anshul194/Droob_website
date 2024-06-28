import React from "react";

export default function footer() {
  return (
    <>
    <hr className="text-gray-200 "></hr>
      <div className="bg-black ">
        <div className="grid md:grid-cols-3 flex flex-row">
          <div className="p-24">
            <img className="w-40 h-12 mb-12" src="logo.png"></img>
            <p className="text-white text-xl font-bold mr-4 hover:text-red-500">
              Create Website By Doob So Quick Download And Make Your Site.
            </p>
          </div>

          <div className="p-24">
            <div className="grid md:grid-cols-2">
              <div className="text-white">
                <p className='mb-4 font-semibold'>SERVICE</p>
                <ul className="text-gray-500">
                  <li className='mb-4 hover:text-white'>About</li>
                  <li className='mb-4 hover:text-white'>portfolio</li>
                  <li className='mb-4 hover:text-white'>Contact</li>
                  <li className='mb-4 hover:text-white'>Service</li>
                </ul>
              </div>
              <div className="text-white">
                <p className='mb-4 font-semibold'>COMPANY</p>
                <ul className=' text-gray-500'>
                  <li className='mb-4 hover:text-white'>About</li>
                  <li className='mb-4 hover:text-white'>portfolio</li>
                  <li className='mb-4 hover:text-white'>Contact</li>
                  <li className='mb-4 hover:text-white'>Service</li>
                </ul>
                
              </div>
            </div>
          </div>

          <div className="p-24">
            <p className="text-white text-xl font-bold mb-4">Stay with Us</p>

            <p className="text-gray-500 text-xl font-bold mb-8">
              2000+ Our clients are subscribe Around the World
            </p>

            <div className="flex flex-row">
              <input
                className="bg-transparent text-white w-80 h-16"
                type="email"
                placeholder=" Enter your email here "
              ></input>
              <button className="text-white bg-red-600 font-bold text-xl mb-8 w-40 h-16 ml-4 rounded-md">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
