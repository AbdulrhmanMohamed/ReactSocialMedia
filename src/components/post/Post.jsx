import React from 'react'
import './post.css'
import Comment from '../../img/comment.png'
import Heart from '../../img/like.png'
import Share from '../../img/share.png'
import NotLike from '../../img/notlike.png'
function Post({data}) {
  return (
    <div className='post'>
        <img src={data.img} alt="" />
        <div className="postReact">
            <img src={data.liked?Heart:NotLike} alt="" />
            <img src={Share}alt="" />
            <img src={Comment}alt="" />
        </div>
        <span style={{fontSize:'13px',color:'var(--gray)'}}>Likes {data.likes}</span>
        <div className="name">
            <span>{data.name}</span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post