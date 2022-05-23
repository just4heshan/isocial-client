import {React} from 'react'
import { Link } from 'react-router-dom';
import './navigation.css'
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/logo.svg"

const Navigation = () => {
  return (
        <div className='navigate'>
        <div className='navigateWrapper'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='menu'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/campaign">Campaign</Link></li>
                    <li><Link to="/advertisement">Advertiesment</Link></li>
                    <li><Link to="/stories">All Stories</Link></li>
                </ul>
            </div>
            <div className='toolbar'>
               <PersonIcon className='user-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navigation;