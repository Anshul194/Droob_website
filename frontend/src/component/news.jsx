import React from 'react'
import newsdata  from './newsApi'
import NewsCard from './newsCard'
import Footer from './footer'

export default function news() {
  return (
    <>
    <div className='bg-black  w-full'>
        <p className='text-red-600 text-xl flex items-center justify-center  font-medium ml-24 p-8'>Latests News
        </p>
        <p className='text-white font-bold flex items-center justify-center text-4xl'>Our Latest News.</p>
</div>
        <div className='grid md:grid-cols-3 p-20 gap-8'>
        {newsdata.map((news,index)=>(
       <NewsCard
       key={index} 
       img={news.img} 
       date={news.date}
        content={news.content}></NewsCard>
        ))}
      </div>
      <Footer></Footer>
    </>
  )
}
