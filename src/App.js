import React from "react";


import "./App.css";

import Image from "./assets/bg-image.png";
import IsocialAppPreview from "./pages/IsocialAppPreview";
import Auth from "./pages/Auth";



let authToken = false;

// authToken = true;

const App = () => {

  if(!authToken) return (
    <div className="app__wrapper">
      <img className="background-image" src={Image} alt="eclipse" />
      <Auth />
    </div>
  );
 
  return (
    <div className="app__wrapper">
      <img className="background-image" src={Image} alt="eclipse" />
      <IsocialAppPreview />
    </div>
  );
};

export default App;
