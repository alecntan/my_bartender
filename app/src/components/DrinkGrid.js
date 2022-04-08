import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { images } from '../data/image_list.js';
import { sample_drinks } from '../data/sample_drinks.js';


export default function DrinkGrid(props) {

    const handleClickImage = (name) => {
        console.log(name);
    }

    const handleClickFave = (name) => {
        console.log(name + ' is a fave');
    }

    return (
        <ImageList sx={{ width: '100%'}} cols={4}>
            {sample_drinks.map((drink) => (
                <ImageListItem key={drink.strDrinkThumb}>
                    <img
                        src={`${drink.strDrinkThumb}`}
                        alt={drink.strDrink}
                        loading="lazy"
                        width={100}
                        height={100}
                        onClick={() => handleClickImage(drink.strDrink)}
                    />
                    <ImageListItemBar
                        title={drink.strDrink}
                        actionIcon={
                            <IconButton
                                onClick={() => handleClickFave(drink.strDrink)}
                            >
                                <FavoriteIcon sx={{ color: 'white' }}/>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
  );
}

