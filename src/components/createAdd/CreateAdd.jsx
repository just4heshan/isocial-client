import React from 'react'

import "./createAdd.css";

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import MoodIcon from '@mui/icons-material/Mood';
import PushPinIcon from '@mui/icons-material/PushPin';

const CreateAdd = () => {
  return (
    <div className="share-post">
        <div className="share-post-wrapper">
            <div className="share-post-top">
                <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Profile Image" className="share-post-profile-image" />
                <textarea rows={5} cols={5} placeholder='Advertisement description...' type="text" className="share-input" />
            </div>
            <hr className="share-post-hr" />
            <div className="share-post-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <AddAPhotoIcon fontSize="large" className='share-option-icon' />
                        <span className="share-option-text">Photo</span>
                    </div>
                    {/* <div className="share-option">
                        <TagIcon fontSize="large" className='share-option-icon tag-icon-color' />
                        <span className="share-option-text">Tag</span>
                    </div>
                    <div className="share-option">
                        <MoodIcon fontSize="large" className='share-option-icon feeling-icon-color' />
                        <span className="share-option-text">Feeling</span>
                    </div> */}
                    <div className="share-option">
                        <PushPinIcon fontSize="large" className='share-option-icon location-icon-color' />
                        <span className="share-option-text">Location</span>
                    </div>
                </div>
                <button className="publish-btn">Publish Add</button>
            </div>
        </div>
    </div>
  )
}

export default CreateAdd