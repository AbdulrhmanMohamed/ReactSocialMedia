import React from 'react'
import './followersCard.css'
import {Followers} from '../../Data/FollowersData'
import './followersCard.css'
function FollowersCard() {
  return (
    <div className='followersCard'>
        <h4>Who is Following You</h4>

        {Followers.map((ele,index)=>{
            return (
                <div className='follower' key={index}>
                    <div>
                        <img src={ele.image} alt="followerImg" className="followerImg" />
                        <div className="name">
                            <h6>{ele.name}</h6>
                            <h6>{ele.userName}</h6>
                        </div>
                    </div>

                    <button className='button fc-btn'>Follow</button>

                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard