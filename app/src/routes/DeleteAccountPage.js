import { useState } from 'react';
import DeleteAccountForm from '../components/DeleteAccountForm.js';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { auth } from '../config.js';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from 'firebase/auth';

export default function DeleteAccountPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDelete = (password) => {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
        reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => { 
            deleteUser(auth.currentUser);
            navigate('/');
        }).catch((error) => {setError(error.message); })
    };

    return (
        <DeleteAccountForm onDelete={handleDelete} error={error} />
    );
}
