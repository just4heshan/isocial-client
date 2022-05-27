import { React, useState } from "react";

import "./feed.css";
import CreateCampaign from "../createCampaign/CreateCampaign";
import PostCampaign from "../post/PostCampaign";
import { Posts } from "../../dummyData";
import CampaignSidebar from "../sideBar/CampaignSidebar";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <div className="feed-contents">
          <CreateCampaign />
          {Posts.map((post) => (
            <PostCampaign key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
