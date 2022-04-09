import { useState } from 'react';
import { auth } from '../config.js';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RegisterForm from '../components/Register.js';

export default function LoginPage(props) {

   
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((useCredentials) => {
            navigate('/login');
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    };

    return (
        <RegisterForm onRegister={handleRegister} error={error}/>
    );
}
