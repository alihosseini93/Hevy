import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Grid from '@mui/material/Grid';
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
import Fit1 from "../img/fit1.jpg";
import Fit2 from "../img/fit2.jpg";
import Fit3 from "../img/fit3.jpg";

const CardSelect = (props) => {
 
 

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

   const params = useParams()
    const listexercise = exercise.find((item) => item.id == params.id)
   
    console.log(listexercise);
    const [timer, setTimer] = React.useState('');
 
    const handleChangeSelected = (event: SelectChangeEvent) => {
        setTimer(event.target.value);
    };

    return (
        <div>
          <Card sx={{ maxWidth: 'max', marginTop: 5 }}>
            <CardHeader
               avatar={
                   <Avatar  aria-label="recipe">
                    <img className='imglist'  src={listexercise?.avatar}/>
                   </Avatar>
               }
               action={
                   <IconButton aria-label="settings">
                       <MoreVertIcon />
                   </IconButton>
               }
               title={<h1>{listexercise?.title}</h1>}
           />
           <CardContent>
               <Typography variant="body2" color="text.secondary">
                   <TextareaAutosize
                       aria-label="empty textarea"
                       placeholder=" Note..."
                       style={{ width: 960, height: 40 }}
                   />
               </Typography>
           </CardContent>
           <Grid container spacing={0}>
               <Grid xs={2}> <h1 className="m-3 restTimer">  <AvTimerIcon /> Rest Timer : </h1></Grid>
               <Grid xs={3}>    <FormControl sx={{ m: 1, minWidth: 80 }}>
                   <InputLabel id="demo-simple-select-autowidth-label">Timer</InputLabel>
                   <Select
                       labelId="demo-simple-select-autowidth-label"
                       id="demo-simple-select-autowidth"
                       value={timer}
                       onChange={handleChangeSelected}
                       autoWidth
                       label="timer"
                   >
                       <MenuItem value="">
                           <em>None</em>
                       </MenuItem>
                       <MenuItem value={0}>OFF</MenuItem>
                       <MenuItem value={5}>5 s</MenuItem>
                       <MenuItem value={10}>10 s</MenuItem>
                   </Select>
               </FormControl>
               </Grid>
           </Grid>
       </Card>        
                                        
       </div>
    )
}

export default CardSelect
