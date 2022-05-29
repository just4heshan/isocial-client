import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./createCampaign.css";
// import { createCampaign } from "../../actions/campaigns";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TagIcon from "@mui/icons-material/Tag";
import MoodIcon from "@mui/icons-material/Mood";
import PushPinIcon from "@mui/icons-material/PushPin";

const CreateCampaign = (e) => {
  // const dispatch = useDispatch();
  const campaignsCollectionRef = collection(db, "campaigns");

  const [postData, setPostData] = useState({ message: "", tags: "" });
  const [postImage, setPostImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const createNewCampaign = async () => {
    await addDoc(campaignsCollectionRef, {
      message: postData.message || "No Desc",
      comment: "0",
      date: "",
      imageUrl: imageURL,
      isLiked: false,
      like: 0,
      userId: 2,
      userName: "Saroj Malakkar",
    });
  };

  const uploadImage =() => {
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + postImage.name);
    uploadBytesResumable(imageRef, postImage)
      .then((snapshot) => {
        console.log("Uploaded", snapshot.totalBytes, "bytes.");
        getDownloadURL(snapshot.ref).then((url) => {
            setImageURL(url)
        });
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
  }

  const imageUploadHandler = (e) => {
    if (e.target.files[0]) {
      setPostImage(e.target.files[0]);
      console.log(postImage);
    }
  };

  return (
    <div className="share-post">
      <div className="share-post-wrapper">
        <form>
          <div className="share-post-top">
            <img
              src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
              alt="Profile Image"
              className="share-post-profile-image"
            />
            <textarea
              placeholder="What is in your mind?"
              type="text"
              className="share-input"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </div>
          <hr className="share-post-hr" />
          <div className="share-post-bottom">
            <div className="share-options">
              <div className="share-option">
                {/* <div className="input-image"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>     */}
                <input className="input-file" type="file" onChange={imageUploadHandler} />
                <AddAPhotoIcon fontSize="large" className="share-option-icon" />
                <span className="share-option-text">Photo</span>
              </div>
              <div className="share-option">
                <MoodIcon
                  fontSize="large"
                  className="share-option-icon feeling-icon-color"
                />
                <span onClick={uploadImage} className="share-option-text">Upload Image</span>
              </div>
              <div className="share-option">
                <PushPinIcon
                  fontSize="large"
                  className="share-option-icon location-icon-color"
                />
                <span className="share-option-text">Location</span>
              </div>
            </div>
            <button className="share-btn" onClick={createNewCampaign}>
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
