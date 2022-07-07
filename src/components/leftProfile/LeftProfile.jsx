import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../logoSearch/LogoSearch'

import './leftProfile.css'
function LeftProfile() {
  return (
    <div className='leftProfile'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default LeftProfile