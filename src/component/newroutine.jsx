import React from "react";
import Navbar from "./navbar";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Fit1 from "../img/fit1.jpg";
import Fit2 from "../img/fit2.jpg";
import Fit3 from "../img/fit3.jpg";
import '../App.css';



const equipment= [
    {
      value: 'allequipment',
      label: 'All Equipment',
    },
    {
      value: 'none',
      label: 'None',
    },
    {
      value: 'barbell',
      label: 'Barbell',
    },
    {
      value: 'dumbbell',
      label: 'Dumbbell',
    },
    {
      value: 'kettlebell',
      label: 'Kettlebell',
    },
  ];
const muscles = [
    {
      value: 'allmuscles',
      label: 'All Muscles',
    },
    {
      value: 'abdominals',
      label: 'Abdominals',
    },
    {
      value: 'abductors',
      label: 'Abductors',
    },
    {
      value: 'biceps',
      label: 'Biceps',
    },
  ];



function Newroutin() {
    const [currency, setCurrency] = React.useState('allequipment');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const [curren, setCurren] = React.useState('allmuscles');

    const handleChanges = (event) => {
      setCurren(event.target.value);
    };
  
    return ( 
        <div className='rourin.style' >
            <Navbar />
            <div className='exercise-box'>
                   
                    <div className="exercise-right">
                        <div className="croutin">
                            <h2>Create Routine</h2>
                            <button>Save Routine</button>
                        </div>
                        <div className="listRoutin">
                            <input type="text" id="lname" name="lname" placeholder="Routine Title"></input>
                            <div style={{paddingTop: "180px"}}>
                                <FitnessCenterIcon fontSize="large"/>
                                <h2>Select an exercise</h2>
                            </div> 
                        </div>
                    </div>
                     
                    <div className='exercise-left'>
                        <Box component="form" sx={{'& .MuiTextField-root': { margin:'4px 0' , width: '35ch' },}} noValidate autoComplete="off">
                            <p>Filters</p>
                            <div>
                                <TextField
                                    id="outlined-select"
                                    select
                                    value={currency}
                                    onChange={handleChange}
                                    
                                >
                                    {equipment.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    value={curren}
                                    onChange={handleChanges}
                                >
                                    {muscles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </Box>
                        <libary>
                            <div className='libaryTitle'>
                                <p>Library</p>
                                <a>+ Create Exercise</a>
                            </div>
                            <div>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: 'rgb(240, 240, 240);' }}
                                >
                                <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Exercise"
                                    inputProps={{ 'aria-label': 'search exercise' }}
                                />
                                
                            </Paper>
                            </div>
                            <div>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , maxHeight: 300,position: 'relative', overflow: 'auto',}}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={Fit1} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Ab Scissors"
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                            </Typography>
                                            {"Abdominals"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src={Fit2} />

                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Ab Wheel"
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                            </Typography>
                                            {"Abdominals"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src={Fit3} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Arnold Press (Dumbbell)"
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                            </Typography>
                                            {'Shoulders'}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src={Fit3} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Arnold Press (Dumbbell)"
                                        secondary={
                                            <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                            </Typography>
                                            {'Shoulders'}
                                            </>
                                        }
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </libary>
                    </div>
                </div>
            </div>
           
     );
}

export default Newroutin;