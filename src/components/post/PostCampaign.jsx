import { React, useState } from "react";

import "./postCampaign.css";
import { Users } from "../../dummyData";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PostCampaign = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  };

//   const postOptionsHandler = (e, props) => {
//     if(!props.authToken) return (
       
//       );
//   }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="User Image"
              className="post-profile-image"
            />
            <span className="post-user-name">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon className="vert-icon" />
          </div>
        </div>
        <div className="post-campaign-center">
          <span className="post-desc">{post?.desc}</span>
          <img src={post.photo} alt="Post Image" className="post-image" />
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
              <span>{like}</span> {like === 0 || 1 ? "Likes" : "Like"}
            </span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment">
              <span>{post.comment}</span> Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCampaign;
