import React from "react";

import Navigation from "../components/navigateBar/Navigation";
import Sidebar from "../components/sideBar/Sidebar";
import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightBar/Rightbar";
import "./isocial-app-preview.css";

const IsocialAppPreview = () => {
  return (
    <div className="isocial__preview">
      <Navigation />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default IsocialAppPreview;
