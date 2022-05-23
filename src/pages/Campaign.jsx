import React from "react";

import Sidebar from "../components/sideBar/Sidebar";
import Feed from "../components/feed/Feed";
// import Rightbar from "../components/rightBar/Rightbar";
import "./campaign.css";

const Campaign = () => {
  return (
    <div className="isocial__preview">
      <div className="home-container">
        <Sidebar />
        <Feed />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Campaign;
