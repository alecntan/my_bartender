import { useState } from 'react';
import LoginForm from '../components/Login.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredentials) => {
            navigate('/');
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    return (
        <LoginForm onLogin={handleLogin} error={error} />
    );
}
