import { useState } from 'react';
import ResetEmailForm from '../components/ResetEmailForm.js';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { auth } from '../config.js';
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail }from 'firebase/auth';

export default function ResetEmailPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = (password, newEmail) => {
        const credential =  EmailAuthProvider.credential(auth.currentUser.email, password);
        reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => { 
            updateEmail(auth.currentUser, newEmail);
            setMsg('Email updated successfully');
            setError('');
        })
        .catch((error) => {setError(error.message)});
    }
    
    return (
        <ResetEmailForm onReset={handleReset} error={error} msg={msg}/>
    );
}
