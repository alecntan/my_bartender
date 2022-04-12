import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import { sample_drinks } from '../data/sample_drinks.js';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getDrinks } from '../util/server.js';
import DrinksView from '../components/DrinksView.js';
import CircularProgress from '@mui/material/CircularProgress';

export default function ResultsPage(props) {

    const [drinks, setDrinks] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [ isLoading, setLoading] = useState(true);

    const handleGetResults = (results) => {
        setDrinks(results);
        setLoading(false);
    }

    useEffect(() =>{
        getDrinks(searchParams, handleGetResults);
    }, []);
    
    return (
        <>
            <Typography sx={{ mb: 2 }}variant='h5' component='div'>
                Search Results
            </Typography>
            {isLoading == false
                ? <DrinkGrid drinks={drinks}/>
                : (<CircularProgress />)
            }
        </>
    );
}
