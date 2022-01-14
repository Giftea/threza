import React, {useContext} from 'react'
import { CryptoContext } from '../context/CryptoContext';
import {Navbar, CryptoCard, Footer,} from '../components'

const Cryptocurrencies = () => {
  const { crypto } = useContext(CryptoContext);

    console.log(crypto)
    return (
        <div>
        <Navbar />
          <div className='lg:p-20 py-12 px-4'>
            <h1 className="text-white mb-10 text-3xl sm:text-5xl py-2 text-gradient ">
             Top 12 Cryptocurrencies
            </h1>
            <div>
              <CryptoCard />
            </div>
          </div>
        <Footer/>
      </div>
    )
}

export default Cryptocurrencies
