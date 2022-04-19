import React from 'react'
import './navigation.css'
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../assets/logo.svg"

const Navigation = () => {
  return (
    <div className='navigate'>
        <div className='navigateWrapper'>
            <div className='logo'>
                <img src={Logo} alt="loog" />
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Stories</a></li>
                    <li><a href="#">iBlog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='toolbar'>
               <PersonIcon className='user-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navigation