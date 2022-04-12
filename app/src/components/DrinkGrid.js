import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function DrinkGrid(props) {

    const navigate = useNavigate();
    const handleClickImage = (id) => {
        navigate(`/drink/${id}`);
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

