import React from 'react'

import "./feed.css";    
import SharePost from '../sharePost/SharePost';
import Post from '../post/Post';
import {Posts} from "../../dummyData"

const Feed = () => {
  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-heading">
                <div className="feed-top">
                  {/* <h3 className="heading-text">Feeds Here</h3> */}
                  <SharePost />
                  {Posts.map((post) => (
                    <Post key={post.id} post={post} />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed