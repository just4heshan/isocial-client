import { React, useState } from "react";

import "./feed.css";
import { Posts } from "../../dummyData";
import PostAdvertise from "../post/postAdvertise";
import CreateAdd from "../createAdd/CreateAdd";

const AdvertisementFeed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <div className="feed-contents">
          <CreateAdd />
          {Posts.map((add) => (
            <PostAdvertise key={add.id} add={add} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementFeed;
