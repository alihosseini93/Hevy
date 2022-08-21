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
import logors from "../logors.png";
import Stack from '@mui/material/Stack';
import '../App.css';
import './navbar.css';
import { Disclosure, Transition } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';


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
      <nav className="bg-white shadow ">
      <div className ="navBar">
        <div className='navBox'>
          <div className="navLogo">
            <a href='/'><img className='hidden sm:flex' src={logo} width="110" height="26" /></a>
            <a href='/'><img className='flex sm:hidden' src={logors} width="40" height="40" /></a>
          </div>
          <div className="navMenu">
            <a href='/'>
              <div className='navMenuItem'>
                <HomeIcon fontSize="small" /><p className='hidden sm:flex'>Feed</p>
              </div>
            </a>
            <a href='/routines'>
              <div className='navMenuItem'>
                <ContentPasteIcon fontSize="small" /><p className='hidden sm:flex'>Routines</p>
              </div>
            </a>
            <a href='/exercise'>
              <div className='navMenuItem'>
                <FitnessCenterIcon fontSize="small" /><p className='hidden sm:flex'>Exercises</p>
              </div>
            </a>
          </div>
        </div>
        <div className="navProfile">
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 45, height: 45 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 45,
                height: 45,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
      </nav>
    );
  }
  
  
  export default Navbar;
