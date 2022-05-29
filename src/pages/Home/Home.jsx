import React from "react";

import "./home.css";
import FollowersList from "../../components/sideBar/follwersList/FollowersList";
import { Users } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            alt="profile-photo"
            className="profile-photo"
          />
          <img
            className="cover-photo"
            src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg"
            alt="cover photo"
          ></img>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-wrapper">
            <div className="bottom-left">
              <div className="bottom-left-wrapper">
                <span className="details-title">MY DETAILS</span>
                <ui className="details-list">
                  <li className="list-item">
                    <span className="user-name">Saroj Malakkar</span>
                  </li>
                  <li className="list-item">
                    <span className="user-email">saroj@gmail.com</span>
                  </li>
                  <li className="list-item">
                    <span className="user-hometown">Victoria, Melbourne</span>
                  </li>
                  <li className="list-item">
                    <span className="user-mobile">+61 433 433 433</span>
                  </li>
                </ui>
                <button className="edit-details-btn">Edit details</button>
              </div>
            </div>
            <div className="bottom-center">
              <div className="bottom-center">
                <div className="bottom-center-wrapper">
                  <span className="follower-title">FOLLOWERS</span>
                  <ui className="followers-list">
                    {Users.map((user) => (
                      <FollowersList key={user.id} user={user} />
                    ))}
                  </ui>
                </div>
              </div>
            </div>
            <div className="bottom-right">
              <div className="bottom-right-wrapper">
                <span className="market-title">MARKETS</span>
                <ui className="markets-list">
                  {Users.map((user) => (
                    <FollowersList key={user.id} user={user} />
                  ))}
                </ui>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
