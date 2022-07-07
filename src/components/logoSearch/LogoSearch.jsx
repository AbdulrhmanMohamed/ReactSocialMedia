import React from 'react'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './logoSearch.css'
function LogoSearch() {
    return (
        <div className='logoSearch'>
            <img src={logo}
                alt="logo icon"/>
            <div className="search">
                <input type="text" placeholder='#Explore'/>
                <div className="sIcon">
                    <UilSearch/>
                </div>
            </div>

        </div>
    )
}

export default LogoSearch
