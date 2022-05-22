import React from 'react';

import "./post.css";
import {Users} from "../../dummyData";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = ({post}) => {
  return (
    <div className="post">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="User Image" className="post-profile-image" />
                    <span className="post-user-name">{Users.filter((user) => user.id === post.userId)[0].username}</span>
                    <span className="post-date">{post.date}</span>
                </div>
                <div className="post-top-right">
                    <MoreVertIcon className='vert-icon'/>
                </div>
            </div>
            <div className="post-center">
                <span className="post-desc">{post?.desc}</span>
                <img src={post.photo} alt="Post Image" className="post-image" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <FavoriteBorderIcon className='post-like-icon' fontSize='large' />
                    <span className="post-like"><span>{post.like}</span> Likes</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment"><span>{post.comment}</span> Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;