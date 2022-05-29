import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Image from "./assets/bg-intro-desktop.svg";
import Auth from "./pages/Auth/Auth";
import Campaign from "./pages/Campaign/Campaign";
import Advertisement from "./pages/Advertisement/Advertisement";
import Navigation from "./components/navigateBar/Navigation";
import Home from "./pages/Home/Home";
import Stories from "./pages/Stories/Stories";
// import { getCampaign } from "./actions/campaigns";

const App = () => {
  /** Redux-Dispatch a req */
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   return () => {
  //     dispatch(getCampaign());
  //   };
  // }, [dispatch])

  const [authToken, setAuthToken] = useState(false);

  const authCheckHandler = () => {
    setAuthToken(true);
  };

  return (
    <BrowserRouter>
      <div>
        <img className="backgroundImage" src={Image} alt="eclipse" />
        <Navigation setAuthToken={setAuthToken} />
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/campaign" element={<Campaign />} />
          <Route exact path="/advertisement" element={<Advertisement />} />
          <Route exact path="/stories" element={<Stories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

//Authenticatng is not working
