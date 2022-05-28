import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.css";
import { Users } from "../../dummyData";

import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/logo.svg";
import { Avatar } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navigation = ({ setAuthToken }) => {
  const user = null;

  let menu;

  const [isShowMenu, setIsShowMenu] = useState(false);

  const [isLogOut, setIsLogOut] = useState(false);

  if (isShowMenu) {
    menu = 
    <div className="menu-items">
      <div className="menu-items-wrapper">
        <ui className="menu-item-list">
          <Link className="menu-item" to={'/'}><li>HOME</li></Link>
          <Link className="menu-item" to={'/campaign'}><li>CAMPAIGN</li></Link>
          <Link className="menu-item" to={'/advertisement'}><li>ADVERTISEMENT</li></Link>
          <Link className="menu-item" to={'/stories'}><li>ALL STATUS</li></Link>
          <hr className="hr-menu"/>
          <li className="menu-item">MY FEEDS</li>
          <li className="menu-item">MY MARKETS</li>
          <li className="menu-item">BOOKMARKS</li>
          <li className="menu-item">EVENTS</li>
        </ui>
      </div>
    </div>;
  }

  const logOutHandler = (e) => {
    {
      isLogOut &&
        // e.preventDefault()
        setIsLogOut(true);
    }
  };

  useEffect(() => {
    return () => {
      (isLogOut)&&(
        setAuthToken(true)
      )
      // console.log(setAuthToken)
    };
  }, [isLogOut]);

  return (
    <div className="navigate">
      <div className="navigateWrapper">
        <div className="logo">
          <img src={Logo} alt="logo" width={110} />
        </div>
        <div className="menu">
          <ul>
            <li className="menu-list">
              <Link className="menu-list-link" to="/">
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link className="menu-list-link" to="/campaign">
                Campaign
              </Link>
            </li>
            <li className="menu-list">
              <Link className="menu-list-link" to="/advertisement">
                Advertiesment
              </Link>
            </li>
            <li className="menu-list">
              <Link className="menu-list-link" to="/stories">
                All Stories
              </Link>
            </li>
          </ul>
        </div>
        <div className="toolbar">
          {user ? (
            <Avatar
              className="user-icon"
              alt={Users.name[1]}
              src={Users.photo[0]}
            ></Avatar>
          ) : (
            <Link to={"/auth"}>
              <PersonIcon className="user-icon" onClick={logOutHandler} />
            </Link>
          )}
          <a
            href="#"
            class="menu-toggle"
            onClick={() => setIsShowMenu((prevIsShowMenu)=>!prevIsShowMenu)}
          >
            <div className="hamburger-menu">
              <span className="span-bar"></span>
              <span className="span-bar"></span>
              <span className="span-bar"></span>
            </div>
          </a>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
