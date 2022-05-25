import { React, useState } from "react";

import "./index.css";

import Image from "./assets/bg-intro-desktop.svg";
import Auth from "./pages/Auth/Auth";
import Campaign from "./pages/Campaign";
import Advertisement from "./pages/Advertisement";
import Navigation from "./components/navigateBar/Navigation";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  const [authToken, setAuthToken] = useState(true)
  return (
    <BrowserRouter>
      {!authToken && (
        <div className="app__wrapper">
          <Navigation />
          <Auth />
        </div>
      )}
      {authToken && (
        <div className="app__wrapper">
          <img className="backgroundImage" src={Image} alt="eclipse" />
          <Navigation setAuthToken={setAuthToken} authToken={authToken} />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
