import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import VerifyEmailNotice from '../components/VerifyEmailNotice.js';
import FavouritesGrid from '../components/FavouritesGrid.js';
import FavouritesContent from '../components/FavouritesContent.js';
import { auth } from '../config.js';


export default function FavouritesPage(props) {
    return (
        <>
            { auth.currentUser != null ? <FavouritesGrid /> : (
                <Typography variant='h5' textAlign='center' component='div'>
                    Access Denied 
                </Typography>
            ) }
        </> 
    );
}
