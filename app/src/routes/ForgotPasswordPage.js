import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import ForgotPasswordForm from '../components/ForgotPasswordForm.js';
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
        <ForgotPasswordForm onReset={handleReset} error={error} />
    );
}
