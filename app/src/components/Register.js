import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm(props){

    let navigate = useNavigate();
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
            <Grid item>
                <Typography variant='h6'>
                    Sign Up
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <TextField 
                    required id='outlined-required'
                    label='Email'
                    defaultValue='example@example.com'
                    sx={{  width: "30%" }}
                />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <TextField 
                    required id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    sx={{  width: "30%" }}
                />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Button sx={{ mr: 2, mt: 3, color: 'black' }} onClick={handleClickLogin}>Login</Button>
                <Button sx={{ ml: 2, mt: 3, color: 'black'  }}>Sign Up</Button>
            </Grid>
        </Grid>
    );
}
