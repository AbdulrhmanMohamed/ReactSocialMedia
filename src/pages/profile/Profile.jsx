import React from 'react'
import LeftProfile from '../../components/leftProfile/LeftProfile'
import PostSide from '../../components/postSide/PostSide'
import ProfileCard from '../../components/profileCard/ProfileCard'
import RightSide from '../../components/rightSide/RightSide'
import './profile.css'
function Profile() {
  return (
    <div className='profile'>
        <LeftProfile/>
        
        <div className="profileCenter">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile