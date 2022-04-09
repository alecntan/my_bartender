import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPasswordForm(props){

    let navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    }
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [newPassword, setNewPassword] = useState('');
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleReset = () => {
        props.onReset(email, password, newPassword); 
    };


    return (
        <Grid 
            sx={{ mt: 15 }}
            container
            alignItems='center'
            justifyContent='center'
            spacing={2}
        >
            <Grid item textAlign='center' xs={12}>
                <Typography variant='h6'>
                    Update Password
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign='center'>
            { props.error != '' && <Typography variant='subtitle1' sx={{ color: 'red'}} xs={12}>{props.error}</Typography> }
            </Grid>
             <Grid item xs={12} textAlign='center'>
            { props.msg != '' && <Typography variant='subtitle1' sx={{ color: 'green'}} xs={12}>{props.msg}</Typography> }
            </Grid>

            <Grid item xs={4} textAlign='center'>
                <TextField 
                    required id='outlined-required'
                    label='Email'
                    defaultValue=''
                    fullWidth
                    onChange={handleEmailChange}
                />
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <TextField 
                    required id='outlined-password-input'
                    label='Current Password'
                    type='password'
                    autoComplete='current-password'
                    fullWidth
                    onChange={handlePasswordChange}
                />
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <TextField 
                    required id='outlined-new-password-input'
                    label='New Password'
                    type='password'
                    autoComplete='new-password'
                    fullWidth
                    onChange={handleNewPasswordChange}
                />
            </Grid>

            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 2, color: 'black'  }} onClick={handleReset} >Update</Button>
                <Button sx={{ ml: 2, mt: 2, color: 'black'  }} onClick={handleCancel}>Cancel</Button>
            </Grid>
        </Grid>
    );
}
