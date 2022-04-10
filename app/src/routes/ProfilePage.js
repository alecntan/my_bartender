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
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../config.js';


export default function ProfilePage(props) {

    const drink_id = useParams();

    const getDrink = (id) => {
        return { d : 'd' };
    };

    const curr_drink = getDrink(drink_id);

    return (
        <Grid container sx={{ mt: 7 }} spacing={4}>
            <Grid item textAlign='center' xs={6}>
                <Box
                    display='flex'
                    justifyContent='center'
                    component='img'
                    src={curr_drink.imageLink}
                    width='100%'
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='overline' display='block'>
                    Remove Favourite
                    <IconButton>
                        <FavoriteIcon sx={{ color: 'red' }}/>
                    </IconButton>
                </Typography>
                <Typography variant='h3'component='div'>
                    { curr_drink.name }
                </Typography>
                <Typography variant='subtitle1' gutterBottom component='div' sx={{ mb: 2}}>
                    { curr_drink.type }  { curr_drink.iba == null ? '' : `| ${curr_drink.iba}` }
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    Ingredients
                </Typography>
                <List dense={true}>
                    { curr_drink.ingredients.map((i) => {
                        return (
                            <ListItem key={i.name}>
                                <ListItemText
                                    primary={`${i.name} ${ i.measure == null ? '' : '( ' + i.measure + ' )' }`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
                <Typography variant='h6' gutterBottom component='div'>
                    Instructions
                </Typography>
                <Typography variant='body1' gutterBottom component='div'>
                    { curr_drink.instructions }
                </Typography>
            </Grid>
        </Grid>
    );
}
