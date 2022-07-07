import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './profileSide.css'
function ProfileSide() {
  return (
        <div className='porfileSide'>
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
        </div>
   
  )
}

export default ProfileSide