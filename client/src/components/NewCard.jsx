import React, { useContext } from "react";
import { NewsContext } from '../context/NewsContext';
import moment from 'moment';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {
  const { news } = useContext(NewsContext);
  console.log(news)
  return (
    <div className='flex flex-wrap justify-center items-center '>
         {news.map((singleNews) => {
           return (
            <a href={singleNews.url} target="_blank" rel="noreferrer">
               <div  className='blue-glassmorphism pt-7 cursor-pointer m-4 flex flex-1
                  2xl:min-w-[450px]
                  2xl:max-w-[500px]
                  sm:min-w-[270px]
                  sm:max-w-[300px]
                  min-w-full
                  flex-col p-3 rounded-md hover:shadow-2xl"'>
               <div className="flex w-full justify-between">
                  <h2 className='text-white mb-10 font-bold text-1xl'>  {singleNews.name.length > 10 ? `${singleNews.name.substring(0, 50)}...` : singleNews.name} </h2>
                  <img style={{maxWidth:"200px", maxHeight: '100px'}} src={singleNews?.image?.thumbnail?.contentUrl || demoImage} alt="" />
               </div>
               <div>
                 <p className='text-white'>
                  {singleNews.description.length > 100 ? `${singleNews.description.substring(0, 100)}...` : singleNews.description}
                 </p>
               </div>
               <div className="flex w-full my-7 justify-between">
                 <div className="flex  justify-between">
                   <img style={{maxWidth:"60px", maxHeight: '30px'}} className='mr-3 rounded' src={singleNews.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                   <p className='text-white'>{singleNews.provider[0]?.name.length > 15 ? `${singleNews.provider[0]?.name.substring(0, 15)}...` : singleNews.provider[0]?.name}</p>
                 </div>
                 <p className='text-white'>{moment(singleNews.datePublished).startOf('ss').fromNow()}</p>
               </div>
             </div>
            </a>
           )
         })}
    </div>
  )
}

export default News
