import React, {useContext} from 'react'
import 'react-accessible-accordion/dist/fancy-example.css';
import {Navbar,  Footer,} from '../components'
import { CryptoContext } from '../context/CryptoContext';
import HTMLReactParser from 'html-react-parser';

import millify from 'millify'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Exchanges = () => {
  const { exchanges } = useContext(CryptoContext);
console.log(exchanges)
    return (
        <div>
            <Navbar />
            <div className='lg:p-20 py-12 px-4'>
            <h1 className="text-white mb-10 text-3xl sm:text-5xl py-2 text-gradient ">
             Exchanges
            </h1>
            <div className='flex justify-between p-10 blue-glassmorphism w-full'>
                <h1 className="text-white">Exchanges</h1>

                <div className='flex w-6/12 justify-between w-6/12'>
                    <p className="text-white">24h Trade Volume</p>
                    <p className="text-white">Markets</p>
                    <p className="text-white">Change</p>
                </div>
            </div>
            <Accordion>
                {
                    exchanges.map((exchange, index) => {
                        return (
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="flex w-full justify-between">
                                            <div className="flex ">
                                                <img src= {exchange.iconUrl} className='mr-3'  style={{maxWidth:"30px", maxHeight: '30px'}} />
                                                <p>{exchange.name}</p>
                                            </div>

                                            <div className='flex w-6/12 justify-between'>
                                                    <div>${millify(exchange.volume)}</div>
                                                    <div>{millify(exchange.numberOfMarkets)}</div>
                                                    <div>{millify(exchange.marketShare)}%</div>
                                            </div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='white-glassmorphism py-5 px-3 text-white'>
                                        {HTMLReactParser(exchange.description || '')}         
                                    </p>
                                </AccordionItemPanel>
                        </AccordionItem>
                        )
                    })
                }
        </Accordion>
          </div>
        <Footer />
        </div>
    )
}

export default Exchanges
