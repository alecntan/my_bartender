import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DrinkGrid from '../components/DrinkGrid.js';
import Typography from '@mui/material/Typography';
import VerifyEmailNotice from '../components/VerifyEmailNotice.js';
import FavouritesGrid from '../components/FavouritesGrid.js';
import FavouritesContent from '../components/FavouritesContent.js';
import { auth } from '../config.js';
import { get_favourites } from '../util/server.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export default function FavouritesPage(props) {

    const [favourites, setFavourites] = useState([]);
    const [currUser, setCurrUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setCurrUser(user);
            get_favourites(user.uid, setFavourites);
        } else {
            setCurrUser(null);
            setFavourites(null);
        }
    });
    
    return (
        <>
            { currUser != null ? <FavouritesGrid faves={favourites}/> : (
                <Typography variant='h5' textAlign='center' component='div'>
                    Access Denied 
                </Typography>
            ) }
        </> 
    );
}
