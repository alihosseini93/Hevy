import React from 'react';
import Navbar from './navbar';
import '../App.css';
import '../index.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { green, pink } from '@mui/material/colors';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Fit1 from "../img/fit1.jpg";
import Fit2 from "../img/fit2.jpg";
import Fit3 from "../img/fit3.jpg";
import {useDropzone} from 'react-dropzone';


  
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
function Exercise() {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({
        accept: {
          'image/jpeg': ['.jpeg', '.png']
        }
    });
    const [text, setText] = React.useState('');
    const handlChange = (event) => {
        setText(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [currency, setCurrency] = React.useState('allequipment');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const [curren, setCurren] = React.useState('allmuscles');

    const handleChanges = (event) => {
      setCurren(event.target.value);
    };
  
    return (
        <div className='exercise.style' >
            <Navbar />
            <div className='exercises'>
                <div className='exercise-box lg:flex'>
                    <div className='exercise-left lg:w-65'>
                        <Box component="form" sx={{'& .MuiTextField-root': { margin:'4px 0' , width: '100%' },}} noValidate autoComplete="off">
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
                                <a className='pointer' onClick={handleOpen}>+ Create Exercise</a>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                            <Box className="modalBox">
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Create Exercise
                                </Typography>
                                <div className="container">
                                    <div {...getRootProps({className: 'dropzone , pointer'})} >
                                        <input {...getInputProps()} />
                                        {!isDragActive && (
                                        <>
                                            <Stack direction="row" spacing={2}>
                                                <Avatar sx={{width:'80px',height:'80px', border:'solid 2px rgb(224, 224, 224)' , backgroundColor :'#fff'}}>
                                                <CameraAltIcon sx={{fontSize: '2rem' , color: '#000'}}/>
                                                </Avatar>
                                            </Stack>
                                            <p>Add Image</p>
                                        </>
                                        )}
                                    </div>
                                </div>
                                <div className="listcreateExercise">
                                    <input type="text" id="lname" name="lname" placeholder="Exercise Name"></input>
                                </div>
                                <div className="formatSelect">
                                    <p>Exercise Type</p>
                                    <div style={{width:'300px'}} className="formatControler">
                                        <FormControl className="formControl" >
                                            <InputLabel sx={{lineHeight:'.7em'}} id="demo-simple-select-autowidth-label">Select</InputLabel>
                                            <Select
                                            sx= {{height:'40px'}}
                                            id="demo-simple-select-autowidth"
                                            value={text}
                                            onChange={handlChange}
                                            autoWidth
                                            label="Select"
                                            >
                                            <MenuItem value="" sx={{width:'290px'}}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>    
                                </div>
                                <hr style={{margin : '20px 0'}}></hr>
                                <div className="formatSelect">
                                    <p>Equipment</p>
                                    <div className="formatControler">
                                        <FormControl className="formControl" >
                                            <InputLabel sx={{lineHeight:'.7em'}} id="demo-simple-select-autowidth-label">Select</InputLabel>
                                            <Select
                                            sx= {{height:'40px'}}
                                            id="demo-simple-select-autowidth"
                                            value={text}
                                            onChange={handlChange}
                                            autoWidth
                                            label="Select"
                                            >
                                            <MenuItem value="" sx={{width:'190px'}}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>    
                                </div>
                                <hr style={{margin : '20px 0'}}></hr>
                                <div className="formatSelect">
                                    <p>Primary Muscle Group</p>
                                    <div className="formatControler">
                                        <FormControl className="formControl" >
                                            <InputLabel sx={{lineHeight:'.7em'}} id="demo-simple-select-autowidth-label">Select</InputLabel>
                                            <Select
                                            sx= {{height:'40px'}}
                                            id="demo-simple-select-autowidth"
                                            value={text}
                                            onChange={handlChange}
                                            autoWidth
                                            label="Select"
                                            >
                                            <MenuItem value="" sx={{width:'190px'}}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>    
                                </div>
                                <hr style={{margin : '20px 0'}}></hr>
                                <div className="formatSelect">
                                    <p>Other Muscles</p>
                                    <div className="formatControler">
                                        <FormControl className="formControl" >
                                            <InputLabel sx={{lineHeight:'.7em'}} id="demo-simple-select-autowidth-label">Select</InputLabel>
                                            <Select
                                            sx= {{height:'40px'}}
                                            id="demo-simple-select-autowidth"
                                            value={text}
                                            onChange={handlChange}
                                            autoWidth
                                            label="Select"
                                            >
                                            <MenuItem value="" sx={{width:'190px'}}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>    
                                </div>
                                <div className="saveExercise">

                                <button>Save Routine</button>
                                </div>
                            </Box>
                            </Modal>
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
                                <List sx={{ width: '100%', bgcolor: 'background.paper' , maxHeight: 300,position: 'relative', overflow: 'auto',}}>
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
                                </List>
                            </div>
                        </libary>
                    </div>
                    <div className="exercise-right md:mt-50 lg:w-35">
                        <FitnessCenterIcon/>
                        <h2>Select an exercise</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Exercise;



