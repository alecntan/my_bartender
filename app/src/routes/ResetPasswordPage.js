import { useState } from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import { signInWithEmailAndPassword, updatePassword }from 'firebase/auth';

export default function ResetPasswordPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = (email, password, newPassword) => {
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            updatePassword(auth.currentUser, newPassword)
                .then(() => {
                    setError('');
                    setMsg('Password Update Successfully!');
                })
        }).catch((error) => {
            setError(error.message);
        })
    }
    
    return (
        <ResetPasswordForm onReset={handleReset} error={error} msg={msg}/>
    );
}
