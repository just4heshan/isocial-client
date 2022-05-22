import React from "react";


import "./index.css";

import Image from "./assets/bg-intro-desktop.svg";
import IsocialAppPreview from "./pages/IsocialAppPreview";
import Auth from "./pages/Auth";



let authToken = true;

// authToken = true;

const App = () => {

  if(!authToken) return (
    <div className="app__wrapper">
      {/* <img className="background-image" src={Image} alt="eclipse" /> */}
      <Auth />
    </div>
  );
 
  return (
    <div className="app__wrapper">
      <img className="backgroundImage" src={Image} alt="eclipse" />
      <IsocialAppPreview />
    </div>
  );
};

export default App;
