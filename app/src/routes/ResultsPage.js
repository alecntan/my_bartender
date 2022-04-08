import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import { sample_drinks } from '../data/sample_drinks.js';

export default function ResultsPage(props) {

    const [drinks, setDrinks] = useState([]);
    const { filter } = useLocation();
    
    console.log(filter);

    return (
        <>
            <Typography sx={{ mb: 2 }}variant='h5' component='div'>
                Search Results
            </Typography>
            {drinks.length > 0 ? <DrinkGrid drinks={drinks}/> : "No recipes found"}
        </>
    );
}
