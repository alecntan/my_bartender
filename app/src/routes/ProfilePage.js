import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { get_drink_by_id } from '../util/server.js';
import  Profile  from '../components/Profile.js';


export default function ProfilePage(props) {


    const drink_id = useParams();
    const [drink, setDrink] = useState(null);
    get_drink_by_id(drink_id, setDrink);

    return (
        <>
            { drink == null 
                ? <Typography variant='subtitle1'>No Drink Found</Typography> 
                : <Profile drink={drink} /> 
            }
        </>
    );
}

