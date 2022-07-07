import React,{useState,useEffect} from 'react'
import './rightSide.css'
import Home from '../../img/home.png'
import Comment from '../../img/comment.png'
import Noti from '../../img/noti.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'
import ShareModal from '../shareModal/shareModal'
function RightSide() {
  const [modalOpened,setModalOpened]=useState(false)
 
  
  return (
    <div className='rightSide'>
        <div className="navIcons">
            <img src={Home} alt="HOme Nav" />
            <UilSetting/>
            <img src={Comment} alt="" />
            <img src={Noti} alt="" />
        </div>
        <TrendCard/>
        <button className="button tr-btn" onClick={()=>{setModalOpened(true);}}>Share</button> 

        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

    </div>
  )
}

export default RightSide