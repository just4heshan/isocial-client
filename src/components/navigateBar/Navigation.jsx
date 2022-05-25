import {React, useEffect} from 'react'
import { Link } from 'react-router-dom';

import './navigation.css'
import { Users } from "../../dummyData";

import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/logo.svg"
import { Avatar } from '@mui/material';

const Navigation = ({authToken, setAuthToken}) => {
    const user = null;

    // const logOutHandler = (e) => {
    //     e.preventDefault()

    //     setAuthToken(false);
    // }

    useEffect(() => {
      return () => {
        setAuthToken(!authToken)
        // console.log(setAuthToken)
      };
    }, [])

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
                <Link to={"/auth"}><PersonIcon className='user-icon'/></Link>
               )}
            </div>
        </div>
    </div>
  )
}

export default Navigation;