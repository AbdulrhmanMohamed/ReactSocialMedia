import React from 'react'
import {Modal, useMantineTheme} from '@mantine/core';
// import './profileModal.css'
import PostShare from '../postShare/PostShare';
function ShareModal({modalOpened ,setModalOpened}) {
    const theme = useMantineTheme();
    return (


        <Modal overlayColor={
                theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpened}
            onClose={()=>{setModalOpened(false)}}
            size='55%'
            style={{borderRadius:'10px !important'}}
            >

            {/* Modal content */} 
                <PostShare/>

            </Modal>
    );

}

export default ShareModal
