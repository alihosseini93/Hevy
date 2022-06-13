import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import React from 'react';
import logo from "../logo.png";
import '../index.css';


function Header() { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        
        <Box className="box-class" sx={{ display: 'flex' , justifyContent: 'center' }}>
        <a href="/Home"><img className="item-box" src={logo} width="140" height="35" /></a>
          <Typography className="item-box" sx={{ minWidth: 100 }}>
            <ContentPasteIcon fontSize="small" /><a href="/routines"> Routines </a>
          </Typography>
          <Typography className="item-box" sx={{ minWidth: 100 }}>
            <FitnessCenterIcon fontSize="small" /><a href="/exercise"> Exercise </a> 
          </Typography>
          <Tooltip className="item-box item-avator" title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
            <Avatar sx={{ width: 40, height: 40 }}>A</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        
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
                width: 32,
                height: 32,
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
              <a href="/settings">Settings</a>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <a href="/login">LogIn</a>
          </MenuItem>
          
        </Menu>
      </>
    );
  }
  
  
  export default Header;