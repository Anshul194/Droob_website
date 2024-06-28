import React from "react";
export default function newsCard({ img, date, content }) {
  return (
    <>
      <div className="bg-slate-900  rounded shadow-lg text-white w-84 mb-8 ">
        <div className="flex items-center justify-center group  mb-8" >
        <img
        className="news-card-img object-cover w-full h-full transition duration-300 transform group-hover:scale-90"
        src={img}
        alt="News Image"
      />
        </div>
        <p className="mt-4 text-medium font-semibold ml-12 text-gray-500 mb-4">
          {date}
        </p>
        <p className="mt-2 text-white text-2xl font-bold mb-16 p-8">{content}</p>
        
      </div>

    
    </>
  );
}
