import React, { useContext } from "react";
import { NewsContext } from '../context/NewsContext';
import {Navbar, NewsCard, Footer,} from '../components'


const News = () => {
  const { news } = useContext(NewsContext);
  console.log(news)
  return (
    <div>
      <Navbar />
        <div className='p-20'>
          <h1 className="text-white mb-10 text-3xl sm:text-5xl py-2 text-gradient ">
            Latest News on Ethereum
          </h1>
          <div>
            <NewsCard />
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default News
