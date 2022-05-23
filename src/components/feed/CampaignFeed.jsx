import {React, useState} from 'react'

import "./feed.css";    
import CreateCampaign from '../createCampaign/CreateCampaign';
import PostCampaign from '../post/PostCampaign';
import {Posts} from "../../dummyData"

const Feed = () => {

  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-heading">
                <div className="feed-top">
                  <CreateCampaign />
                  
                  {Posts.map((post) => (
                    <PostCampaign key={post.id} post={post} />
                  ))}
                  {/* <CreateAdd /> */}
                  {/* {Posts.map((post) => (
                    <PostAdvertise key={post.id} post={post} />
                  ))} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed