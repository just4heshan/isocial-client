import React from 'react'

import "./campaignSideBar.css";

import FeedIcon from '@mui/icons-material/Feed';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { Users } from '../../dummyData';
import FollowersList from './follwersList/FollowersList';

const CampaignSidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <ul className="sidebar-list">
                <li className='sidebar-item'>
                    <FeedIcon className='sidebar-icon'/>
                    <span className="sidebar-item-text">My Feed</span>
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
            <span className="friend-list-heading">Followers</span>
            <ul className="sidebar-friend-list">
            {Users.map((user) => (
            <FollowersList key={user.id} user={user} />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default CampaignSidebar