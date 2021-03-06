import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

export default function ResetEmailForm(props){

    let navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [newEmail, setNewEmail] = useState('');
    const handleNewEmailChange = (e) => {
        setNewEmail(e.target.value);
    }

    const handleReset = () => {
        props.onReset(password, newEmail); 
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
                    Update Email
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign='center'>
            { props.error !== '' && <Typography variant='subtitle1' sx={{ color: 'red'}} xs={12}>{props.error}</Typography> }
            </Grid>
             <Grid item xs={12} textAlign='center'>
            { props.msg !== '' && <Typography variant='subtitle1' sx={{ color: 'green'}} xs={12}>{props.msg}</Typography> }
            </Grid>

            <Grid item xs={4} textAlign='right'>
                <TextField 
                    required id='outlined-password-input'
                    label='Current Password'
                    type='password'
                    autoComplete='current-password'
                    width='80%'
                    onChange={handlePasswordChange}
                />
            </Grid>
            <Grid item xs={4} textAlign='left'>
                <TextField 
                    required id='outlined-new-email-input'
                    label='New Email'
                    type='email'
                    width='80%'
                    onChange={handleNewEmailChange}
                />
            </Grid>

            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 2, color: 'black'  }} onClick={handleReset} >Update</Button>
                <Button sx={{ ml: 2, mt: 2, color: 'black'  }} onClick={handleCancel}>Done</Button>
            </Grid>
        </Grid>
    );
}
