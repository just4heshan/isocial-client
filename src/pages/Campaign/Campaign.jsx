import React from "react";
import { useSelector } from "react-redux";

import CampaignSidebar from "../../components/sideBar/CampaignSidebar";
import CampaignFeed from "../../components/feed/CampaignFeed"
import "./campaign.css";

const Campaign = () => {
  const campaigns = useSelector((state)=>state.campaigns)
  console.log(campaigns)
  return (
    <div className="campaign__preview">
      <div className="home-container">
        <div className="container-left"><CampaignSidebar/></div>
        <div className="container-right"><CampaignFeed /></div>
      </div>
    </div>
  );
};

export default Campaign;
