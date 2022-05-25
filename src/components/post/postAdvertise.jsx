import { React, useState } from "react";

import "./postAdvertise.css";
import { Users } from "../../dummyData";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const PostAdvertise = ({ post }) => {
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
        <div className="post-center-add">
          <img src={post.photo} alt="Post Image" className="post-image" />
          <div className="post-desc-add">
          <span className="post-desc-title">{post?.desc}</span>
          <p className="post-desc-details">Post Details</p>
          </div>
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            {!isLiked && (
              <BookmarkAddIcon
                className="post-like-icon-before"
                fontSize="large"
                onClick={handleLike}
              />
            )}
            {isLiked && (
              <BookmarkAddedIcon
                className="post-like-icon-after"
                fontSize="large"
                onClick={handleLike}
              />
            )}

            <span className="post-like">
              <span>{like}</span> {like === 0 || 1 ? "People saved" : ""}
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

export default PostAdvertise;
