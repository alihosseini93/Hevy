import React from 'react';
import Navbar from './navbar';
import '../App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListIcon from '@mui/icons-material/List';
import { width } from '@mui/system';



function Routines() {
    return (
        <div className='rourin.style' >
            <Navbar />
            <div className='routins'>
                <div className='routin-box'>
                    <div className='routin-left'>
                        <h2>My Routines</h2>
                        <Button variant="outlined" startIcon={<ContentPasteIcon />}>
                        <a href="/newroutin"> <p>New Routine</p> </a>
                        </Button>

                    </div>
                    <div className='routin-right' >
                        <div className='displayStyle'><p>My Routines (2)</p></div>
                        <div className='displayStyle listBox'>
                            <a>DAY1</a>
                            <MoreHorizIcon />
                        </div>
                        <div className='displayStyle listBox'>
                            <a>DAY1</a>
                            <MoreHorizIcon />
                        </div>  
                    </div>
                </div>
            </div>
        </div>

     );
}

export default Routines;