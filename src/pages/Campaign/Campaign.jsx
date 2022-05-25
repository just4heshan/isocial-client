import React from "react";
import { useSelector } from "react-redux";

import CampaignSidebar from "../../components/sideBar/CampaignSidebar";
import CampaignFeed from "../../components/feed/CampaignFeed"
import Rightbar from "../../components/rightBar/Rightbar";
import "./campaign.css";

const Campaign = () => {
  const campaigns = useSelector((state)=>state.campaigns)
  console.log(campaigns)
  return (
    <div className="isocial__preview">
      <div className="home-container">
        <CampaignSidebar />
        <CampaignFeed />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Campaign;
