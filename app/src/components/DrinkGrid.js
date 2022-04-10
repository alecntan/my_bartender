import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { images } from '../data/image_list.js';
import { sample_drinks } from '../data/sample_drinks.js';


export default function DrinkGrid(props) {

    const navigate = useNavigate();
    const handleClickImage = (id) => {
        navigate(`/drink/${id}`);
    }

    const handleClickFave = (name) => {
        //TODO:
        //  handle click when anon
        //  handle click when logged in
    }

    return (
        <ImageList sx={{ width: '100%'}} cols={4}>
            {props.drinks.map((drink) => (
                <ImageListItem key={drink.id}>
                    <img
                        src={drink.imageLink}
                        alt={drink.name}
                        loading="lazy"
                        width={100}
                        height={100}
                        onClick={() => handleClickImage(drink.id)}
                    />
                    <ImageListItemBar
                        title={drink.name}
                    />
                </ImageListItem>
            ))}
        </ImageList>
  );
}

