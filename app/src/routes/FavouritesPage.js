import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';


export default function FavouritesPage(props) {

    const [faves, setFaves] = useState([]);

    return (
        <>
            <Typography sx={{ mb: 2}} variant='h5' component='div'>
                My Favourites
            </Typography>
            {faves.length > 0 ? <DrinkGrid /> : "No favourites listed"}
        </>

    );
}
