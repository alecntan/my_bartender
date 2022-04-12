import { useState } from 'react';
import DeleteAccountForm from '../components/DeleteAccountForm.js';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { auth } from '../config.js';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from 'firebase/auth';
import { delete_favourites } from '../util/server.js';

export default function DeleteAccountPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDelete = (password) => {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
        reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => { 
            const user_id = auth.currentUser.uid;
            deleteUser(auth.currentUser);
            delete_favourites(user_id);
            navigate('/');

        }).catch((error) => {setError(error.message); })
    };

    return (
        <DeleteAccountForm onDelete={handleDelete} error={error} />
    );
}
