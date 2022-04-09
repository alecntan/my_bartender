import { auth } from '../config.js';
import FavouritesGrid from './FavouritesGrid.js';
import VerifyEmailNotice from './VerifyEmailNotice.js';

export default function FavouritesContent(props) {
    return (
        <>
            {auth.currentUser.emailVerified  ? <FavouritesGrid /> : <VerifyEmailNotice /> }
        </>
    );
}
