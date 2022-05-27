import React, {useState} from "react";
import Select from "react-select";
import FileBase from 'react-file-base64';

import "./createAdd.css";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PushPinIcon from "@mui/icons-material/PushPin";

const CreateAdd = () => {
  const [postData, setPostData] = useState({title: '', message: '', category: '', selectedFile:'' });

  const options = [
    { value: "Personal;", label: "Personal" },
    { value: "Business", label: "Business" },
  ];

  const submitHandler = (e) => {
    e.preventDefault()
    // setPostData()
    console.log(postData)
  }

  return (
    <div className="add-post">
      <div className="add-post-wrapper">
        <div className="add-post-top">
          <img
            src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
            alt="Profile Image"
            className="add-post-profile-image"
          />
        </div>
        <form action="#" className="add-form" onSubmit={submitHandler}>
        <input
          rows={5}
          cols={5}
          placeholder="  Write an advertisement title..."
          type="text"
          className="add-input-title"
          value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          rows={5}
          cols={5}
          placeholder="  Advertisement description..."
          type="text"
          className="add-input-desc"
          value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <Select
          className="select-opt"
          options={options}
          placeholder="Choose the advertiesment type"
          value={postData.category} 
                    onChange={(e) => setPostData({ ...postData, category: e.target.value })}
        />
        <hr className="add-post-hr"/>
        <div className="add-options">
            <div className="add-option">
              <div className="input-image"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>    
              <AddAPhotoIcon fontSize="large" className="add-option-icon" />
              <span className="add-option-text">Photo</span>
            </div>
            <div className="add-option">
              <PushPinIcon
                fontSize="large"
                className="add-option-icon location-icon-color"
              />
              <span className="add-option-text">Location</span>
            </div>
        </div>
          <button className="publish-btn">Publish</button>
        </form>
        <hr className="add-post-hr" />
        <div className="isocial-bannner">
            <span className="banner-text">make it easy with iSocial</span>
            {/* <img src={Logo} alt="logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default CreateAdd;
