import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { auth } from '../config.js';

export default function LoginForm(props){

    let navigate = useNavigate();

    const handleClickSignUp = () => {
        navigate('/register');
    }
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        props.onLogin(email, password); 
    };

    const handleReset = () => {
        navigate('/reset');
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
                    Login
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
                <TextField 
                    required id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    sx={{  width: "30%" }}
                    onChange={handlePasswordChange}
                />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 2, color: 'black'  }} onClick={handleLogin} >Login</Button>
                <Button sx={{ ml: 2, mt: 2, color: 'black'  }} onClick={handleClickSignUp}>Sign Up</Button>
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button color='inherit' onClick={handleReset}>
                    Forgot Password?
                </Button>
            </Grid>
        </Grid>
    );
}
