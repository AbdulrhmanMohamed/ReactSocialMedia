import React,{useState} from 'react'
import './infoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../profileModal/profileModal'
function InfoCard() {
    const [modalOpened,setModalOpened]=useState(false)
  return (
    <div className='infoCard'>
        <div className="infoHead">
            <h3>InfoHead</h3>
           <div>
           <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />
           <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
           </div>
        </div>
        <div className="info">
            <span> <b>Status</b> </span>
            <span>In Realation with</span>
        </div>
        <div className="info">
            <span> 
               <b>Lives</b> 
            </span>
            <span>Egypt,Alex</span>
        </div>
        <div className="info">
            <span> <b>Works At</b> </span>
            <span>Self Tautght Developer</span>
        </div>

        <button className="button pf-btn">LogOut</button>
    </div>
  )
}

export default InfoCard