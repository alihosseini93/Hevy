import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Card, CardHeader, FormControl, MenuItem, TextareaAutosize, Typography, CardContent, IconButton, InputLabel, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Fit1 from "../img/fit1.jpg";
import Fit2 from "../img/fit2.jpg";
import Fit3 from "../img/fit3.jpg";
import { createSelectorHook } from 'react-redux';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
const CardSelect = (props) => {

    const list = useSelector(state => state.exercise.list)


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





    const [SET, setSET] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSET(event.target.value);
    };


    const [timer, setTimer] = React.useState('');

    const handleChangeSelected = (event: SelectChangeEvent) => {
        setTimer(event.target.value);
    };

    return (
        <div>
              {list.map((item)=>  <Card sx={{ maxWidth: 'max', marginTop: 5 }}>
             <CardHeader
                 avatar={
                     <Avatar aria-label="recipe">
                         <img className='imglist' src={item?.avatar} />
                     </Avatar>
                 }
                 action={
                     <IconButton aria-label="settings">
                         <MoreVertIcon />
                     </IconButton>
                 }
                 title={<h1>{item?.title}</h1>}
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
                 <Grid xs={2}> <h1 className="m-3 restTimer">  <AvTimerIcon /> Rest Timer :
                 </h1>
                 </Grid>
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
                             <em>none</em>
                         </MenuItem>
                         <MenuItem value={0}>OFF</MenuItem>
                         <MenuItem value={5}>5 s</MenuItem>
                         <MenuItem value={15}>15 s</MenuItem>
                         <MenuItem value={20}>20 s</MenuItem>
                         <MenuItem value={25}>25 s</MenuItem>
                     </Select>
                 </FormControl>
                 </Grid>
                 <Grid xs={7}></Grid>
                 <Grid sx={{ m: 3, minWidth: 80 }} xs={2}><h1 className='font-bold ' >SET</h1></Grid>
                 <Grid xs={3}></Grid>
                 <Grid sx={{ m: 2, minWidth: 80 }} xs={2}><h1 className='font-bold '>REPS</h1></Grid>
                 <Grid xs={3}></Grid>
                 <Grid sx={{ m: 3, minWidth: 80 }} xs={2}>
                     < FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                         <InputLabel id="demo-select-small"></InputLabel>
                         <Select
                             labelId="demo-select-small"
                             id="demo-select-small"
                             value={SET}
                            
                             onChange={handleChange}
                         >
                             <MenuItem value="">
                                 <em>None</em>
                             </MenuItem>
                             <MenuItem value={1}>1</MenuItem>
                             <MenuItem value={2}>Warm up</MenuItem>
                             <MenuItem value={3}>Drop</MenuItem>
                             <MenuItem value={4}>Failure</MenuItem>
                         </Select>
                     </ FormControl>
                 </Grid>
                 <Grid xs={3}></Grid>
                 <Grid sx={{ m: 2, minWidth: 80 }} xs={2}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                 <Grid sx={{ ml: 50 }} xs={12} ><Button size={'large'} variant="outlined">+ Add Set</Button></Grid>
             </Grid>
         </Card>)
         
       }


        </div>
    )
}

export default CardSelect




















