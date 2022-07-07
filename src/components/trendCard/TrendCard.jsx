import React from 'react'
import './trend.css'
import { TrendData } from '../../Data/TrendsData'
function TrendCard() {
  return (
    <div className='trendCard'>
        <h3>Trends For You</h3>
        {
            TrendData.map((trend,index)=>{
                return (
                    <div className='trend' key={index}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares}KShares</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrendCard