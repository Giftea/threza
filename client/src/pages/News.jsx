import React, { useContext } from "react";
import {Navbar, NewsCard, Footer,} from '../components'


const News = () => {
  return (
    <div>
      <Navbar />
        <div className='lg:p-20 py-12 px-4'>
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
