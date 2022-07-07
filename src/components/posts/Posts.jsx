import React from 'react'
import './posts.css'
import { PostsData } from '../../Data/PostData'
import Post from '../post/Post'
function Posts() {
  return (
    <div className='posts'>
       {PostsData.map((post,index)=>{
        return (
            <div className='post' key={index}>
                <Post data={post}/>
            </div>
        )
       })}
    </div>
  )
}

export default Posts