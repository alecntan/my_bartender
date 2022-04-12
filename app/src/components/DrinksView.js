import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';


export default function DrinksView(props) {
    return (
        <>
            { props.drinks.length === 0 
                ? <Typography variant='subtitle1'>No Drinks Found</Typography>
                : <DrinkGrid drinks={props.drinks} />
            }
       </>
    );
}
