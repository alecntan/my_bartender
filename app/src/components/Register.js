import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm(props){


    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        //TODO validate email
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        //TODO validate password
        setPassword(e.target.value);
    };

    const handleClickRegister = () => {
        props.onRegister(email, password);
    }

    const handleClickLogin = () => {
        navigate('/login');
    }

    return (
        <Grid 
            sx={{ mt: 15}}
            container
            alignItems='center'
            justifyContent='center'
            spacing={2}
        >
            <Grid item xs={12} textAlign="center">
                <Typography variant='h6' component='div'>
                    Sign Up
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                { props.error != '' && <Typography textAlign='center' sx={{ color: 'red' }} variant='subtitle1' component='div'>{props.error}</Typography>}
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
                <Button sx={{ mr: 2, mt: 3, color: 'black' }} onClick={handleClickLogin}>Login</Button>
                <Button sx={{ ml: 2, mt: 3, color: 'black'  }} onClick={handleClickRegister}>Sign Up</Button>
            </Grid>
        </Grid>
    );
}
