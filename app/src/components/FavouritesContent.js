import { useOutletContext } from 'react-router-dom';
import FavouritesGrid from './FavouritesGrid.js';
import VerifyEmailNotice from './VerifyEmailNotice.js';

export default function FavouritesContent(props) {

    const currUser = useOutletContext();

    return (
        <>
            {currUser.emailVerified  ? <FavouritesGrid /> : <VerifyEmailNotice /> }
        </>
    );
}
