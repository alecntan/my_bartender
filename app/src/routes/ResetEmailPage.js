import { useState } from 'react';
import ResetEmailForm from '../components/ResetEmailForm.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import { signInWithEmailAndPassword, updateEmail }from 'firebase/auth';

export default function ResetEmailPage(props) {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = (email, password, newEmail) => {
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            updateEmail(auth.currentUser, newEmail)
                .then(() => {
                    setError('');
                    setMsg('Email Update Successfully!');
                })
        }).catch((error) => {
            setError(error.message);
        })
    }
    
    return (
        <ResetEmailForm onReset={handleReset} error={error} msg={msg}/>
    );
}
