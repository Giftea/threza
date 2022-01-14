import React from 'react'
import {Navbar, Welcome, Footer, Transactions, Services, News} from './components'


const Home = () => {
    return (
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Transactions/>
          <News />
          <Footer/>
      </div>
    )
}

export default Home
