import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { sample_drink } from '../data/sample_drink.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

