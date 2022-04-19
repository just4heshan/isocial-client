import React from "react";
import Navigation from "../components/Navigation";
import "./isocial-app-preview.css";

const IsocialAppPreview = () => {
  return (
    <div className="isocial__preview">
      <div className="navi-toolbar"><Navigation /></div>
      <div className="isocial__title"><span>IsocialAppPreview</span></div>
    </div>
  );
};

export default IsocialAppPreview;
