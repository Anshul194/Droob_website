import React from "react";
import Navbar from "./navbar";
import Service from "./service"
import service from "./ServiceApi";
import About from "./about";
import Header from "./header";
export default function home() {
  return (
    <>
      {" "}
      <Header></Header>
      <div className="bg-black ">
        <div className=" container flex flex-wrap mb-20">
        <img className="absolute mb-12 md:mb-0" src="./bg-image-13.jpg"></img>
        <div className=" relative p-60 -ml-16">
            <div className="flex flex-wrap">
              <p className="text-white text-l font-medium relative md:mt-0 mt-8">
                MEETING CONSULTING
              </p>
              <hr className="relative text-white"></hr>
            </div>
            <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold relative mb-8">
              Financial Analysis<br></br>
              Developing Meeting.
            </p>

            <button className="text-white bg-red-600 m-auto p-4 rounded-md font-bold">
              Buy Doob Now
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <p className="text-white text-4xl font-bold relative p-16">
              Ready to start creating a standard website?
            </p>
            <button className="text-white bg-red-600 m-auto p-4 rounded-md font-bold">
              Purchase Doob
            </button>

     
          </div>
        </div>
        <hr className="relative text-white w-full mb-20"></hr>

<div className=' w-full flex items-center justify-center m-auto'>
    <p className='text-red-700 text-xl mb-2'>What We Can Do For You</p>
    </div>
    <div className=' w-full flex items-center justify-center mb-16'>
    <p className=' text-4xl text-white font-bold'>
    Services provide for you.</p>
    </div>
    <div className="grid md:grid-cols-3 flex flex-wrap">
  {service.map((service)=>(
<Service title={service.title} content={service.content}></Service>))}
</div>
      </div>
      <About/>

    </>
  );
}
