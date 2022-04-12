import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

export default function DeleteAccountForm(props){

    let navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleDelete = () => {
        props.onDelete(password);
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
                    Delete Account
                </Typography>
            </Grid>
            <Grid item textAlign='center' xs={12}>
                <Typography variant='body2'>
                    Are you sure you want to delete your account?
                </Typography>
            </Grid>

            <Grid item xs={12} textAlign='center'>
            { props.error !== '' && <Typography variant='subtitle1' sx={{ color: 'red'}} xs={12}>{props.error}</Typography> }
            </Grid>
             <Grid item xs={12} textAlign='center'>
            { props.msg !== '' && <Typography variant='subtitle1' sx={{ color: 'green'}} xs={12}>{props.msg}</Typography> }
            </Grid>
            <Grid item xs={6} textAlign='center'>
                <TextField 
                    required id='outlined-password-input'
                    label='Current Password'
                    type='password'
                    autoComplete='current-password'
                    width='80%'
                    onChange={handlePasswordChange}
                />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 2, color: 'black'  }} onClick={handleDelete} >Delete</Button>
                <Button sx={{ ml: 2, mt: 2, color: 'black'  }} onClick={handleCancel}>Done</Button>
            </Grid>
        </Grid>
    );
}
