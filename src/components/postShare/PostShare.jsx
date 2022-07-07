import React, {useState, useRef} from 'react'
import './postShare.css'
import profile from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
function PostShare() {
    const [image, setImage] = useState(null);
    const imgRef = useRef()

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({image: URL.createObjectURL(img)})
        }
    }
    return (
        <div className='postShare'>
            <img src={profile}
                alt="profileImg"/>
            <div className="input">
                <input type="text" placeholder="What's Happenning"/>
                <div className="postOptions">
                    <div className="option"
                        style={
                            {color: 'var(--photo)'}
                        }
                        onClick={
                            () => imgRef.current.click()
                    }>
                        <UilScenery/>
                        Photo
                    </div>
                    <div className="option"
                        style={
                            {color: 'var(--video)'}
                    }>
                        <UilPlayCircle/>
                        Video
                    </div>
                    <div className="option"
                        style={
                            {color: 'var(--location)'}
                    }>
                        <UilLocationPoint/>
                        Location
                    </div>
                    <div className="option"
                        style={
                            {color: 'var(--shedule)'}
                    }>
                        <UilSchedule/>
                        Schedule
                    </div>
                    <button className='button ps-btn'>Share</button>
                    <div style={
                        {display: 'none'}
                    }>
                        <input type="file" name='myImage'
                            ref={imgRef}
                            onChange={onImgChange}/>
                    </div>
                </div>
                    {image && (
                        <div className="previewImage">
                            <img src={image.image} alt="" />
                            <UilTimes onClick={()=>setImage(null)}/>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default PostShare
