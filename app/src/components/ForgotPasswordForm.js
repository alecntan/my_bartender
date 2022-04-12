import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPasswordForm(props){

    let navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleReset = () => {
        props.onReset(email); 
    };

    const handleCancel = () => {
        navigate(-1);
    }

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
                    Reset Password
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign='center'>
            { props.error != '' && <Typography variant='subtitle1' sx={{ color: 'red'}} xs={12}>{props.error}</Typography> }
            </Grid>

            <Grid item xs={12} textAlign='center'>
                <TextField 
                    required id='outlined-required'
                    label='Email'
                    defaultValue='example@example.com'
                    sx={{  width: "30%" }}
                    onChange={handleEmailChange}
                />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 2, color: 'black'  }} onClick={handleReset} >Send Email</Button>
                <Button sx={{ ml: 2, mt: 2, color: 'black'  }} onClick={handleCancel} >Cancel</Button>
            </Grid>
        </Grid>
    );
}
