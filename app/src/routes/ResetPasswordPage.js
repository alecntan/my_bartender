import { useState } from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm.js';
import { auth } from '../config.js';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword }from 'firebase/auth';

export default function ResetPasswordPage(props) {

    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = (password, newPassword) => {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
        reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => {
            updatePassword(auth.currentUser, newPassword);
            setMsg('Password updated succesfully!');
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    
    return (
        <ResetPasswordForm onReset={handleReset} error={error} msg={msg}/>
    );
}
