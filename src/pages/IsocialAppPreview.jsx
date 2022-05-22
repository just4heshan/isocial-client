import React from "react";

import Navigation from "../components/navigateBar/Navigation";
import Sidebar from "../components/sideBar/Sidebar";
import Feed from "../components/feed/Feed";
import "./isocial-app-preview.css";

const IsocialAppPreview = () => {
  return (
    <div className="isocial__preview">
      <Navigation />
      <div className="home-container">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default IsocialAppPreview;
