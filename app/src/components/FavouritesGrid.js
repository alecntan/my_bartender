import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';


export default function FavouritesGrid(props) {


    return (
        <>
            <Typography sx={{ mb: 2}} variant='h5' component='div'>
                My Favourites
            </Typography>
            {props.faves && props.faves.length > 0 ? <DrinkGrid drinks={props.faves}/> : (
                <Typography variant='body1'>
                    No Favourites found
                </Typography>
            )}
        </>

    );
}
