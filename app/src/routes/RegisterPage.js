import { useState } from 'react';
import { auth } from '../config.js';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RegisterForm from '../components/Register.js';
import { init_favourites } from '../util/server.js';

export default function RegisterPage(props) {

   
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            navigate('/');
            setError('');
            init_favourites(userCredentials.user.uid);
        })
        .catch((error) => {
            setError(error.message);
        })
    };

    return (
        <RegisterForm onRegister={handleRegister} error={error}/>
    );
}
