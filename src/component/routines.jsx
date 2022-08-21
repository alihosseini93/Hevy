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
            <div>
                <div className='routin-box md:flex'>
                    <div className=' max-md:w-full mb-5 lg:w-1/5'>
                        <h2 className='font-bold text-xl mb-4'>My Routines</h2>
                        <Button className='m-2 ' variant="outlined" startIcon={<ContentPasteIcon />}>
                            <a className='p-2' href="/newroutin"> <p>New Routine</p> </a>
                        </Button>
                    </div>
                    <div className='routin-right md:w-full lg:w-4/5' >
                        <div className='displayStyle'><h2 className='pt-4'>My Routines (2)</h2></div>
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