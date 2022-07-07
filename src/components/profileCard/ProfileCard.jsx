import React from 'react'
import './profileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
function ProfileCard() {
    const profilePage=true;
    return (
        <div className='profileCard'>

            <div className="profileImage">
                <img alt="" src={Cover}/>
                <img alt="" src={Profile}/>
            </div>

            <div className="profileName">
                <span>Abdulrhman Farg</span>
                <span>Junior FrontEnd Developer</span>
            </div>

            <div className="followStatus">
            <div className="hr"></div>
                <div>
                    <div className="follow">
                      <span>following</span>
                      <span>2000</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                      <span>flollowers</span>
                      <span>200</span>
                    </div>
                    {profilePage &&(
                      <>
                     
                        <div className="vl"></div>
                      <div className='follow'>
                        <span>3</span>
                        <span>posts</span>
                      </div>
                      </>
                    )}
                </div>
               <div className="hr"></div>
            </div>
          {profilePage?'':  <span className='profileLink'> My Profile</span>}
        </div>
    )
}

export default ProfileCard
