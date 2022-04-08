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

export default function ProfilePage(props) {
    return (
        <Grid container sx={{ mt: 7 }} spacing={4}>
            <Grid item textAlign='center' xs={6}>
                <Box
                    display='flex'
                    justifyContent='center'
                    component='img'
                    src={sample_drink.imageLink}
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
                    { sample_drink.name }
                </Typography>
                <Typography variant='subtitle1' gutterBottom component='div' sx={{ mb: 2}}>
                    { sample_drink.type } | { sample_drink.iba }
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    Ingredients
                </Typography>
                <List dense={true}>
                    { sample_drink.ingredients.map((i) => {
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
                    { sample_drink.instructions }
                </Typography>
            </Grid>
        </Grid>
    );
}
