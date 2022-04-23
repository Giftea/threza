import React, {useContext} from 'react'
import millify from "millify";
import { CryptoContext } from '../context/CryptoContext';

const StatsCard = ({title, value}) => {
    return (
        <div className="stats-block-container">
            <div className="stats-block">
                <div className="stats-container">
                    <h1 className="stats-text">
                           {title}
                    </h1>
                    <h1 className="text-white">
                            {value}
                    </h1>
                </div>
                    <div className="gradient-glow"></div>
                    <div className="gradient-mask"></div>
                    <div className="gradient-outline"></div>
            </div>
        </div>
    )
}

const Stats = () => {
  const { stats} = useContext(CryptoContext);
  const {total, total24hVolume,totalMarketCap,totalMarkets } = stats;
  const data = [
      {
          title: 'Total Cryptocurrencies',
          value: '19,063' 
      },
      {
        title: 'Total Market Cap',
        value: '$1,848,382,509,583'
      },
      {
        title: 'Total 24hr Volume',
        value: '$67,802,715,171'
    },
    {
      title: 'Exchanges',
      value: 511
    },
  ]
    return (
        <div className='stats '>
            <div className="stats-wrapper">
                <div className="stats-main-container">
                    {
                        data?.map((stat) => {
                            return (
                                <StatsCard title={stat.title} value={stat.value} />
                            )
                        })
                    }
                </div>
            </div>
           
        </div>
    )
}

export default Stats
