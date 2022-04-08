import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';

export default function ResultsPage(props) {

    const [drinks, setDrinks] = useState([]);

    return (
        <>
            <Typography sx={{ mb: 2 }}variant='h5' component='div'>
                Search Results
            </Typography>
            {drinks.length > 0 ? <DrinkGrid /> : "No recipes found"}
        </>
    );
}
