import React from 'react'

import "./feed.css";    
import SharePost from '../sharePost/SharePost';

const Feed = () => {
  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-heading">
                <div className="feed-top">
                  <h3 className="heading-text">Feeds Here</h3>
                  <SharePost />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed