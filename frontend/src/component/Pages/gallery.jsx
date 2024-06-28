import React, { useState } from 'react';
import Header from "../header";
import Footer from '../footer'
export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <>
          <Header></Header>

      <div className='bg-black min-h-80 p-40'>
        <p className='text-white flex justify-center items-center font-bold text-4xl'>
          The Easiest Way To Create Website<br />
          Quick Copy & Make Site.
        </p>
        <div className='text-gray-400 flex flex-row justify-center mt-4 md:mb-24'>
          <ul className='flex flex-row'>
            <li className='ml-4'>Home</li>
            <li className='ml-4 mb-20'>Gallery</li>
          </ul>
        </div>

        <div className='grid md:grid-cols-3 gap-4 '>
          {[
            './gallery-01.jpg',
            './gallery-03.jpg',
            './gallery-04.jpg',
            './gallery-05.jpg',
            './galler-06.jpg',      
            './gallery-06.jpg',
            './gallery-01.jpg',
            './gallery-03.jpg',
            './gallery-04.jpg',


          ].map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              className={`transform transition duration-500 ease-in-out ${
                hoveredImage === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <div className="flex flex-row">
            <p className="text-white text-4xl font-bold relative p-16">
              Ready to start creating a standard website?
            </p>
            <button className="text-white bg-red-600 m-auto p-4 rounded-md font-bold">
              Purchase Doob
            </button>

     
          </div>


      </div>

      <Footer></Footer>
    </>
  );
}
