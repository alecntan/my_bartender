import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import VerifyEmailNotice from '../components/VerifyEmailNotice.js';
import { auth } from '../config.js';


export default function FavouritesGrid(props) {


    return (
        <>
            <Typography sx={{ mb: 2}} variant='h5' component='div'>
                My Favourites
            </Typography>
            {props.faves && props.faves.length > 0 ? <DrinkGrid /> : (
                <Typography variant='body1'>
                    No Favourites found
                </Typography>
            )}
        </>

    );
}
