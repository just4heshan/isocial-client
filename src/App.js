import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Image from "./assets/bg-intro-desktop.svg";
import Auth from "./pages/Auth/Auth";
import Campaign from "./pages/Campaign/Campaign";
import Advertisement from "./pages/Advertisement/Advertisement";
import Navigation from "./components/navigateBar/Navigation";
import Home from "./pages/Home/Home";
import Stories from "./pages/Stories/Stories";
import { getCampaign } from "./actions/campaigns";



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(getCampaign());
    };
  }, [dispatch])

  const [authToken, setAuthToken] = useState(true)
  return (
    <BrowserRouter>
      {!authToken && (
        <div className="app__wrapper">
          <Navigation setAuthToken={setAuthToken}/>
          <Auth setAuthToken={setAuthToken}/>
        </div>
      )}
      {authToken && (
        <div className="app__wrapper">
          <img className="backgroundImage" src={Image} alt="eclipse" />
          <Navigation setAuthToken={setAuthToken} />
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
