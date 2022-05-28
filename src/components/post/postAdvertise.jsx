import { React, useState } from "react";

import "./postAdvertise.css";
import { Users } from "../../dummyData";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const PostAdvertise = ({ add }) => {
  const [save, setSave] = useState(add.like);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    setSave(isSaved ? save - 1 : save + 1);
    setIsSaved((prevSaved) => !prevSaved)
  };

//   const postOptionsHandler = (e, props) => {
//     if(!props.authToken) return (
       
//       );
//   }
  return (
    <div className="add">
      <div className="add-wrapper">
        <div className="add-top">
          <div className="add-top-left">
            <img
              src={
                Users.filter((user) => user.id === add.userId)[0]
                  .profilePicture
              }
              alt="User Image"
              className="add-profile-image"
            />
            <span className="add-user-name">
              {Users.filter((user) => user.id === add.userId)[0].username}
            </span>
            <span className="add-date">{add.date}</span>
          </div>
          <div>
            <MoreVertIcon className="vert-icon" />
          </div>
        </div>
        <div className="add-center">
          <img src={add.photo} alt="Advertised Image" className="add-image" />
          <div className="add-desc">
          <span className="add-desc-title">{add?.desc}</span>
          <p className="add-desc-details">
          People connect on Facebook and Instagram every day. Your small business ads can show up as people are exploring what they’re interested in, so making a connection with your business is easy. 

          </p>
          </div>
        </div>
        <div className="add-bottom">
          <div className="add-bottom-left">
            {!isSaved && (
              <BookmarkAddIcon
                className="add-save-icon-before"
                fontSize="large"
                onClick={handleSave}
              />
            )}
            {isSaved && (
              <BookmarkAddedIcon
                className="add-save-icon-after"
                fontSize="large"
                onClick={handleSave}
              />
            )}

            <span className="add-save">
              <span>{save}</span> {save === 0 || 1 ? "People bookmarked" : ""}
            </span>
          </div>
          <div>
            <span className="add-comment">
              <span>{add.comment}</span> Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdvertise;
