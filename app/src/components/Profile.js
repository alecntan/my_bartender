import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Profile(props) {

    return (
        <Grid container sx={{ mt: 7 }} spacing={4}>
            <Grid item textAlign='center' xs={6}>
                <Box
                    display='flex'
                    justifyContent='center'
                    component='img'
                    src={props.drink.imageLink}
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
                    { props.drink.name }
                </Typography>
                <Typography variant='subtitle1' gutterBottom component='div' sx={{ mb: 2}}>
                    { props.drink.type }  { props.drink.iba == null ? '' : `| ${props.drink.iba}` }
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    Ingredients
                </Typography>
                <List dense={true}>
                    { props.drink.ingredients.map((i) => {
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
                    { props.drink.instructions }
                </Typography>
            </Grid>
        </Grid>
    );
}
