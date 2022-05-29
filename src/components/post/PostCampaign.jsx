import React, { useState,useEffect } from "react";

import "./postCampaign.css";
import { Users } from "../../dummyData";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PostCampaign = ({ campaign }) => {
  
  const [like, setLike] = useState(campaign.like);
  const [isLiked, setIsLiked] = useState(false);
  console.log(campaign.userName)

  const handleLike = (e) => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
              alt="User Image"
              className="post-profile-image"
            />
            <span className="post-user-name">
             {campaign.userName}
            </span>
            {/* <span className="post-date">{campaign.date}</span> */}
          </div>
          <div className="post-top-right">
            <MoreVertIcon className="vert-icon" />
          </div>
        </div>
        {/* <hr className="hr-line"/> */}
        <div className="post-campaign-center">
          <span className="post-desc">{campaign.message}</span>
          <img src={campaign.imageUrl} alt="Post Image" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            {!isLiked && (
              <FavoriteBorderIcon
                className="post-like-icon"
                fontSize="large"
                onClick={handleLike}
              />
            )}
            {isLiked && (
              <FavoriteIcon
                className="post-like-icon"
                fontSize="large"
                onClick={handleLike}
              />
            )}

            <span className="post-like">
              <span style={{fontWeight: 200, fontSize: 20}}>{like}</span> {like === 0 || 1 ? "LIKES" : "LIKE"}
            </span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment">
              <span>{campaign.comment}</span> Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCampaign;
