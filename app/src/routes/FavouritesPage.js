import { useParams } from 'react-router-dom';

export default function FavouritesPage(props) {

    let params = useParams();
    return (
        <h1>User {params.userId} Favourites Page</h1>
    );
}
