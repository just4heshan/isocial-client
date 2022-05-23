import React from 'react'

import "./createAdd.css";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import PushPinIcon from '@mui/icons-material/PushPin';

const CreateAdd = () => {
  return (
    <div className="add-post">
        <div className="add-post-wrapper">
            <div className="add-post-top">
                <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Profile Image" className="add-post-profile-image" />
                <textarea rows={5} cols={5} placeholder='Advertisement description...' type="text" className="add-input" />
            </div>
            <hr className="add-post-hr" />
            <div className="add-post-bottom">
                <div className="add-options">
                    <div className="add-option">
                        <AddAPhotoIcon fontSize="large" className='add-option-icon' />
                        <span className="add-option-text">Photo</span>
                    </div>
                    {/* <div className="add-option">
                        <TagIcon fontSize="large" className='add-option-icon tag-icon-color' />
                        <span className="add-option-text">Tag</span>
                    </div>
                    <div className="add-option">
                        <MoodIcon fontSize="large" className='add-option-icon feeling-icon-color' />
                        <span className="add-option-text">Feeling</span>
                    </div> */}
                    <div className="add-option">
                        <PushPinIcon fontSize="large" className='add-option-icon location-icon-color' />
                        <span className="add-option-text">Location</span>
                    </div>
                </div>
                <button className="publish-btn">Publish Add</button>
            </div>
        </div>
    </div>
  )
}

export default CreateAdd