import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import './navigation.css'
import { Users } from "../../dummyData";

import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/logo.svg"
import { Avatar } from '@mui/material';

const Navigation = ({setAuthToken}) => {
    const user = null;

    const [isLogOut, setIsLogOut] = useState(false);

    const logOutHandler = (e) => {
      {isLogOut && (
        // e.preventDefault()
        setIsLogOut((prevIsLogOut)=>!prevIsLogOut)
      )}
    }

    useEffect(() => {
      return () => {
        setAuthToken((prevAuthToken)=> !prevAuthToken)
        // console.log(setAuthToken)
      };
    }, [isLogOut])

  return (
        <div className='navigate'>
        <div className='navigateWrapper'>
            <div className='logo'>
                <img src={Logo} alt="logo" width={110} />
            </div>
            <div className='menu'>
                <ul>
                    <li className='menu-list'><Link className='menu-list-link'to="/">Home</Link></li>
                    <li className='menu-list'><Link className='menu-list-link'to="/campaign">Campaign</Link></li>
                    <li className='menu-list'><Link className='menu-list-link'to="/advertisement">Advertiesment</Link></li>
                    <li className='menu-list'><Link className='menu-list-link'to="/stories">All Stories</Link></li>
                </ul>
            </div>
            <div className='toolbar'>
               {user ? (
                   <Avatar className='user-icon' alt={Users.name[1]} src={Users.photo[0]}></Avatar>
               ):(
                <Link to={"/auth"}><PersonIcon className='user-icon' onClick={logOutHandler}/></Link>
               )}
            </div>
        </div>
    </div>
  )
}

export default Navigation;