import React from "react";
import { Users } from "../../../dummyData";

import "./followersList.css";

const FollowersList = ({ user }) => {
  return (
    <li className="follower-card">
      <img className="follower-image" src={user.profilePicture} alt="" />
      <span className="follower-name">{user.username}</span>
    </li>
  );
};

export default FollowersList;
