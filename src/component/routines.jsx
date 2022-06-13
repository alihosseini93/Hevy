import React from 'react';
import Header from './header';
import '../App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';




function Routines() {
    return (
        <div className='rourin.style' >
            <Header />
            <div className='routin-box'>
                <div className='routin-left'>
                    <h2>My Routines</h2>
                    <Button style={{margin: "10px 0px" , display:"flex" , width: "70%"  }} variant="outlined" startIcon={<ContentPasteIcon />}>
                        New Routine
                    </Button>
                    <Button style={{margin: "10px 0px" , display:"flex" , width: "70%"}} className='button' variant="outlined" startIcon={<CreateNewFolderIcon />}>
                        New Folder
                    </Button>

                </div>
                <div className='routin-right' >
                    <h2>My Routines</h2>
                </div>
            </div>
            
        </div>

     );
}

export default Routines;