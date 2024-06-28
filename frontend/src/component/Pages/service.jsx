import React, { useState } from "react";
import Header from "../header";
import Footer from '../footer'

export default function service() {
  const [isTab, SetTab] = useState(1);

  const TabChange = (tabIndex) => {
    console.log("Tab clicked:", tabIndex);
    SetTab(tabIndex);
  };

  const getImageUrl = () => {
    console.log("Current tab:", isTab);
    switch (isTab) {
      case 1:
        return "tabs-02.jpg";
      case 2:
        return "tabs-03.jpg";
      case 3:
        return "tabs-04.jpg";
      default:
        return "tabs-02.jpg";
    }
  };
  return (
    <>
      <Header />
      <div className="bg-black min-h-80 p-40">
        <div className="grid md:grid-cols-2 mb-44">
          <div>
            <p className="text-white flex justify-center items-center font-bold text-4xl">
              The Easiest Way To Create Website
              <br />
              Quick Copy & Make Site.
            </p>
            <div className="text-gray-400 flex flex-row justify-center md:mt-4">
              <ul className="flex flex-row">
                <li className="ml-4">Home</li>
                <li className="ml-4">Service</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center -mt-16">
            <img src="bg-image-16.png" className="md:w-1/2" alt="Background" />
          </div>
        </div>

        <div className="bg-slate-950">
          <div className="mb-20">
            <p className="text-red-500 text-xl flex justify-center mb-4">
              What We Can Do For You
            </p>
            <p className="text-white text-4xl flex justify-center mb-8 font-bold">
              Services provided for you.
            </p>
            <p className="text-white text-xl flex justify-center mb-12 p-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>

          <div className="relative mb-80">
            <div className="grid md:grid-cols-4 gap-20 relative z-10">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 bg-blue-500 opacity-25 rounded-full"></div>
                <div className="flex items-center justify-center text-white font-bold text-opacity-100 z-20 text-4xl p-12">
                  1
                </div>
                <div className="mt-12">
                  <p className="text-white font-bold text-2xl -mr-12 hover:text-blue-600 mb-8">
                    Awarded Design
                  </p>
                  <p className="text-gray-500">
                    There are many variations variations have.
                  </p>
                </div>
              </div>
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 bg-red-500 opacity-25 rounded-full"></div>
                <div className="flex items-center justify-center text-white font-bold text-opacity-100 z-20 text-4xl p-12">
                  2
                </div>
                <div className="mt-12">
                  <p className="text-white font-bold text-2xl -mr-12 hover:text-blue-600 mb-8">
                    Design & Creative
                  </p>
                  <p className="text-gray-500">
                    There are many variations variations have.
                  </p>
                </div>
              </div>
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 bg-green-500 opacity-25 rounded-full"></div>
                <div className="flex items-center justify-center text-white font-bold text-opacity-100 z-20 text-4xl p-12">
                  3
                </div>
                <div className="mt-12">
                  <p className="text-white font-bold text-2xl  hover:text-blue-600 mb-8 -mr-12 ">
                    App Development
                  </p>
                  <p className="text-gray-500">
                    There are many variations variations have.
                  </p>
                </div>
              </div>
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 bg-pink-500 opacity-25 rounded-full "></div>
                <div className="flex items-center justify-center text-white font-bold text-opacity-100 z-20 text-4xl p-12">
                  4
                </div>
                <div className="mt-12">
                  <p className="text-white font-bold text-2xl -mr-12 hover:text-blue-600 mb-8">
                    Product Designer
                  </p>
                  <p className="text-gray-500 mb-40">
                    There are many variations variations have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mb-20">
            <p className="text-red-500 text-xl flex justify-center mb-4">
              You Can Acquire All.
            </p>
            <p className="text-white text-4xl flex justify-center mb-8 font-bold">
              Acquire new customers with Doob.
            </p>
            <p className="text-white text-xl flex justify-center mb-12 p-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="">
              <ul className=" text-white">
                <li
                  className={`ml-4 cursor-pointer text-gray-500 mb-12  bg-transparent hover:bg-slate-900 p-8  ${
                    isTab === 1 ? "font-bold" : ""
                  }`}
                  onClick={() => TabChange(1)}
                >
                  <span className=" font-bold text-2xl  ">Market Researce.</span>
                  <br></br> Use Doob template you can build a corporate
                  website a short time.
                </li>
                <li
                  className={`ml-4 cursor-pointer text-gray-500 mb-12   bg-transparent hover:bg-slate-900 p-8 ${
                    isTab === 2 ? "font-bold" : ""
                  }`}
                  onClick={() => TabChange(2)}
                >
                 <span className=" font-bold text-2xl  ">  Corporate Report.</span> <br></br> Use Doob template you can build a corporate
                  website a short time.
                </li>
                <li
                  className={`ml-4 cursor-pointer text-gray-500 mb-12  bg-transparent hover:bg-slate-900 p-8 ${
                    isTab === 3 ? "font-bold" : ""
                  }`}
                  onClick={() => TabChange(3)}
                >
                     <span className=" font-bold text-2xl  ">  App Development.</span> <br></br> Use Doob template you can build a corporate
                  website a short time.{" "}
                </li>
              </ul>
            </div>
            <div className="">
              <img src={getImageUrl()} className="md:w-full" alt="Background" />
            </div>
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
      </div>

      <Footer></Footer>
    </>
  );
}
