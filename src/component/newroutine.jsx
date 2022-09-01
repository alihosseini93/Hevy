import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
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
import MenuIcon from '@mui/icons-material/Menu';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { setExercise } from '../store/slice/exerciseSlice'
import CardsSelect from './cardSelect';
import Grid from '@mui/material/Grid';
import Fit1 from "../img/fit1.jpg";
import Fit2 from "../img/fit2.jpg";
import Fit3 from "../img/fit3.jpg";
import '../App.css';



const equipment = [
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
const exercise = [
    {
        id: 1,
        title: 'Ab Scissors',
        body: 'Abdominals',
        avatar: Fit1
    },
    {
        id: 2,
        title: 'Ab Wheel',
        body: 'Abdominals',
        avatar: Fit2
    }, {
        id: 3,
        title: 'Arnold Press (Dumbbell)',
        body: 'Shoulders ',
        avatar: Fit3
    }, {
        id: 4,
        title: 'Arnold Press (Dumbbell)',
        body: 'Shoulders',
        avatar: Fit3
    },
]

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Newroutin() {
    const [currency, setCurrency] = React.useState('allequipment');


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [curren, setCurren] = React.useState('allmuscles');

    const handleChanges = (event) => {
        setCurren(event.target.value);
    };
    const [select, setSelect] = useState("")
    const dispatch = useDispatch()
    // 
    // const SelectionExercise = (option) => {
        
        // exercise.map((exercise) => exercise.id == option ?
        //   <CardsSelect key={exercise.id} title={exercise.title} />  : ''
        // )
    // }
    // <CardsSelect key={exercise.id} exercise={ exercise} />
    // 

    return (
        <div className='rourin.style' >
            <Navbar />
            <div className='container'>
                <div className='exercise-box md:flex' >
                    {/* in ja saz kon */}
                    <div className="exercise-right max-md:w-full mb-5 lg:w-4/6 md:mr-4 mt-6">

                        <Grid container spacing={1} className="croutin md:flex">
                            <Grid item xs={3}>
                                <h2 className="font-bold text-xl">Create Routine</h2>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3}>
                                <Button className="float-end" variant="contained">Save Routine</Button>
                            </Grid>
                        </Grid>

                        <div className="mt-3">
                            <Paper elevation={3} >

                                {/* <input className="m-3" style={{ minWidth: "960px", height: 40 }} type="text" id="lname" name="lname" placeholder="Routine Title"></input> */}

                                {/* <div style={{ paddingTop: "180px" }}> */}
                                {/* <FitnessCenterIcon fontSize="large" /> */}
                                {/* <h2>Select an exercise</h2> */}
                                {/* </div> */}


                                {/* card for task list */}

                    {    <CardsSelect />}


                            </Paper>
                        </div>
                    </div>

                    <div className='exercise-left hidden max-md:w-full mb-5 lg:w-2/6 sm:inline'>
                        <Box component="form" sx={{ '& .MuiTextField-root': { margin: '4px 0', width: '100%' }, }} noValidate autoComplete="off">
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
                                <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: 300, position: 'relative', overflow: 'auto', }}>
                                    <Divider variant="inset" component="li" />

                                    {exercise.map((option) => <Link to={`/CardSelect/${option.id}`} key={option.id} className="flex"> <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={option.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={option.title}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                    </Typography>
                                                    {option.body}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    </Link>)}



















                                </List>
                            </div>
                        </libary>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Newroutin;