import {React, useState} from 'react'

import "./feed.css";    
import {Posts} from "../../dummyData"
import PostAdvertise from '../post/postAdvertise';
import CreateAdd from '../createAdd/CreateAdd';

const AdvertisementFeed = () => {

  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-heading">
                <div className="feed-top">
                  {/* <SharePost />
                  
                  {Posts.map((post) => (
                    <PostCampaign key={post.id} post={post} />
                  ))} */}
                  <CreateAdd />
                  {Posts.map((post) => (
                    <PostAdvertise key={post.id} post={post} />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdvertisementFeed