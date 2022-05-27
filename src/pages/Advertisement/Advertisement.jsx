import React from "react";

import AdvertisementSidebar from "../../components/sideBar/AdvertisementSidebar";
import AdvertisementFeed from "../../components/feed/AdvertisementFeed";
// import Rightbar from "../components/rightBar/Rightbar";
import "../Campaign/campaign.css";

const Advertisement = () => {
  return (
    <div className="campaign__preview">
      <div className="home-container">
        <div className="container-left"><AdvertisementSidebar /></div>
        <div className="container-right"> <AdvertisementFeed /></div>
      </div>
    </div>
  );
};

export default Advertisement;
