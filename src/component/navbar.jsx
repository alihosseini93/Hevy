import {Box,Avatar,Menu,MenuItem,ListItemIcon,Divider, IconButton,Typography,Tooltip} from '@mui/material';
// import {PersonAdd,Settings,Logout,ContentPasteIcon,FitnessCenterIcon} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import React from 'react';
import logo from "../logo.png";
import Stack from '@mui/material/Stack';
import '../App.css';
import './navbar.css'


function Navbar() { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <nav>
      <div className ="navBar">
        <div className='navBox'>
          <div className="navLogo">
            <a href='/'><img src={logo} width="110" height="26" /></a>
          </div>
          <div className="navMenu">
            <a href='/'>
              <div className='navMenuItem'>
                <HomeIcon fontSize="small" /><p>Feed</p>
              </div>
            </a>
            <a href='/routines'>
              <div className='navMenuItem'>
                <ContentPasteIcon fontSize="small" /><p>Routines</p>
              </div>
            </a>
            <a href='/exercise'>
              <div className='navMenuItem'>
                <FitnessCenterIcon fontSize="small" /><p>Exercises</p>
              </div>
            </a>
          </div>
        </div>
        <div className="navProfile">
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
        </Stack>
        </div>
       
      </div>
      </nav>
    );
  }
  
  
  export default Navbar;
