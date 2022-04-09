import { useState } from 'react';
import LoginForm from '../components/Login.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import ResetPasswordForm from '../components/ResetPasswordForm.js';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function LoginPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleReset = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigate('/login');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    return (
        <ResetPasswordForm onReset={handleReset} error={error} />
    );
}
