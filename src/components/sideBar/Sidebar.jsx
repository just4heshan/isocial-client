import React from 'react'

import "./sidebar.css";

import FeedIcon from '@mui/icons-material/Feed';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <ul className="sidebar-list">
                <li className='sidebar-item'>
                    <FeedIcon className='sidebar-icon'/>
                    <span className="sidebar-item-text">Feed</span>
                </li>

                <li className='sidebar-item'>
                    <BookmarkAddedIcon className='sidebar-icon'/>
                    <span className="sidebar-item-text">Bookmarks</span>
                </li>
                
                <li className='sidebar-item'>
                    <EventAvailableIcon className='sidebar-icon'/>
                    <span className="sidebar-item-text">Events</span>
                </li>
            </ul>
            <button className="sidebar-btn">show more</button>
            <hr className='sidebar-hr'/>
            <ul className="sidebar-friend-list">
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>
                <li className="sidebar-friend-item">
                    <img className="friend-image" src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Person Image" className="friend-image" />
                    <span className="friend-name">Heshan</span>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar