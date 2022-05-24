import { React } from "react";

import "./index.css";

import Image from "./assets/bg-intro-desktop.svg";
import Auth from "./pages/Auth";
import Campaign from "./pages/Campaign";
import Advertisement from "./pages/Advertisement";
import Navigation from "./components/navigateBar/Navigation";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let authToken = true;

const App = () => {
  if (!authToken)
    return (
      <div className="app__wrapper">
        <Auth />
      </div>
    );

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <img className="backgroundImage" src={Image} alt="eclipse" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
