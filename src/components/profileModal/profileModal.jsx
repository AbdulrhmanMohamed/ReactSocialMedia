import React from 'react'
import {Modal, useMantineTheme} from '@mantine/core';
import './profileModal.css'
function ProfileModal({modalOpened ,setModalOpened}) {
    const theme = useMantineTheme();
    console.log('modalOpened',modalOpened)
    return (


        <Modal overlayColor={
                theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpened}
            onClose={()=>setModalOpened(false)}
            size='55%'
            style={{borderRadius:'10px !important'}}
            >

            {/* Modal content */} 
                <form action="" className='form'>
                    <h2>Form Modal</h2>
                    <div className="input-wrapper">
                        <input type="text" className='input' name='firstName'   classs="formInput"placeholder='Your first Name' />
                        <input type="text" className='input' name='lastName' placeholder='Your Last Name' />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className='input' name='WorksAt'   classs="formInput"placeholder='WorkS At' />
                       
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className='input' name='livesIn'   classs="formInput"placeholder='Lives iN' />
                        <input type="text" className='input' name='location' placeholder='Location' />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className='input' name='relationStatus' placeholder='Relation Status' />
                    </div>
                    <div className="input-wrapper">
                        ProfileImage:
                        <input type="file"  id="profileImage" name='profileImage' placeholder='ProfileImage'/>
                        CoverImage:
                        <input type="file"  name='coverImage'/>
                    </div>
                    <button className="button inf-btn">Update</button>
                </form>

            </Modal>
    );

}

export default ProfileModal
