import React from "react";

import AdvertisementSidebar from "../../components/sideBar/AdvertisementSidebar";
import AdvertisementFeed from "../../components/feed/AdvertisementFeed";
// import Rightbar from "../components/rightBar/Rightbar";
import "../Campaign/campaign.css";

const Advertisement = () => {
  return (
    <div className="isocial__preview">
      <div className="home-container">
        <AdvertisementSidebar />
        <AdvertisementFeed />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Advertisement;
