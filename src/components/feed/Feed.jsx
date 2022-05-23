import {React, useState} from 'react'

import "./feed.css";    
import SharePost from '../sharePost/SharePost';
import PostCampaign from '../post/PostCampaign';
import {Posts} from "../../dummyData"
import PostAdvertise from '../post/postAdvertise';
import CreateAdd from '../createAdd/CreateAdd';

const Feed = () => {

  return (
    <div className="feed">
        <div className="feed-wrapper">
            <div className="feed-heading">
                <div className="feed-top">
                  {/* <h3 className="heading-text">Feeds Here</h3> */}
                  {/* <SharePost /> */}
                  <CreateAdd />
                  {/* {Posts.map((post) => (
                    <PostCampaign key={post.id} post={post} />
                  ))} */}
                  {Posts.map((post) => (
                    <PostAdvertise key={post.id} post={post} />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed