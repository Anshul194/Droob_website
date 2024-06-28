import React from 'react';
import feedbackdata from './feedbackApi';
import FeedbackCard from './feedbackCard';
import News from './news'

export default function Feedback() {
  return (
    <>
      <div className='bg-black w-full'>
        <p className='text-red-600 flex items-center justify-center  text-xl font-medium ml-24 p-8'>Client Feedback</p>
        <p className='text-white flex items-center justify-center font-bold text-4xl'>What People Say About Us.</p>
      </div>
      <div className='grid md:grid-cols-3 p-20 gap-8'>
      {feedbackdata.map((feedback, index) => (
        <FeedbackCard 
          key={index} 
          img={feedback.img} 
          name={feedback.name} 
          designation={feedback.designation} 
          content={feedback.content} 
        />
      ))}
      </div>
      <News></News>
    </>
  );
}
