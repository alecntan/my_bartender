import { useParams } from 'react-router-dom';

export default function ProfilePage(props) {

    let params = useParams();

    return (
        <h1>Drink { params.drinkId } </h1>
    );
}
