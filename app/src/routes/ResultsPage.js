import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import { getDrinks } from '../util/server.js';
import CircularProgress from '@mui/material/CircularProgress';
import DrinksView from '../components/DrinksView.js';

export default function ResultsPage(props) {

    const [drinks, setDrinks] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [ msg, setMsg ] = useState('');
    const [ isLoading, setLoading] = useState(true);

    const handleGetResults = (results) => {

        if(results === -1) {
            setDrinks([]);
            setLoading(false);

        } else {
            setDrinks(results);
            setLoading(false);

        }
    }


    useEffect(() =>{
        getDrinks(searchParams, handleGetResults);
    }, [searchParams]);
    
    return (
        <>
            <Typography sx={{ mb: 2 }}variant='h5' component='div'>
                Search Results
            </Typography>
            {isLoading === false
                ? <DrinksView drinks={drinks}/>
                : (<CircularProgress />)
            }
        </>
    );
}
