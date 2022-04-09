import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import { sample_drinks } from '../data/sample_drinks.js';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getDrinks } from '../util/server.js';

export default function ResultsPage(props) {

    const [drinks, setDrinks] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() =>{
        getDrinks(searchParams, setDrinks);
    }, []);
    
    return (
        <>
            <Typography sx={{ mb: 2 }}variant='h5' component='div'>
                Search Results
            </Typography>
            {drinks.length > 0 ? <DrinkGrid drinks={drinks}/> : (
                <Typography variant='body1' component='div'>
                    No recipes found
                </Typography>
            )}
        </>
    );
}
