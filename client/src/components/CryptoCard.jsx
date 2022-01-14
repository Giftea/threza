import React, { useContext } from "react";
import { CryptoContext } from '../context/CryptoContext';
import millify from 'millify';

const CryptoCard = () => {
  const { crypto } = useContext(CryptoContext);

    return (
        <div className='flex flex-wrap justify-between items-center '>
             {crypto?.map((currency) => (
                 <div  className='blue-glassmorphism pt-7 cursor-pointer md:m-4 my-3 flex flex-1
                 2xl:min-w-[450px]
                 2xl:max-w-[500px]
                 sm:min-w-[270px]
                 sm:max-w-[300px]
                 min-w-full
                 flex-col p-3 rounded-md hover:shadow-2xl"'>
                    <div className=" " key={currency.id}>
                      <a key={currency.id} to={`/crypto/${currency.id}`}>
                        <div >
                          <div className="flex mb-6 justify-between">
                          <h3 className='text-white  font-bold text-1xl' >{`${currency.rank}. ${currency.name}`}</h3>
                            <img src={currency.iconUrl} style={{maxWidth:"50px", maxHeight: '50px'}}   />
                          </div>
                          <p className='text-white'>Price: {millify(currency.price)}</p>
                          <p className='text-white'>Market Cap: {millify(currency.marketCap)}</p>
                          <p className='text-white'>Daily Change: {currency.change}%</p>
                        </div>
                      </a>
                  </div>
                 </div>
        ))}
        </div>
    )
}

export default CryptoCard
